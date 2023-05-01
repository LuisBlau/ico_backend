import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Role } from "../enums/role.enum";
import { AuthedUserContext } from "../types/AuthedUser.context";
import { RequestContext } from "../types/Request.context";
import { SourceValidator } from "../validators/source.validator";


@Injectable()
export class AuthorizedAccess extends AuthGuard('jwt') implements CanActivate {
    constructor(private reflector: Reflector, private sourceValidator: SourceValidator) {
        super();
    }
    async canActivate(context: ExecutionContext) {
        const requireRoles = this.reflector.getAllAndOverride<Role[]>('AuthorizedRoles', [
            context.getHandler(),
            context.getClass()
        ]);
        //There is no need for authenticated user
        if (!requireRoles) return true;

        const request = context.switchToHttp().getRequest();
        //construct requestContext
        //validate role
        let b = (await super.canActivate(context)) as boolean
        if (!await this.validateRole(requireRoles, request.user)) return false;

        //Validate token
        return b;

    }

    private async validateRole(requireRoles: Role[],   user: AuthedUserContext): Promise<boolean> {
        let roleValidated = false;

        await Promise.all(requireRoles.map(async (role) => {
            switch (role) {
                case Role.ADMIN:
                    // const partner: Partner = await this.sourceValidator.validatePartner(requestContext.wallet);
                    // if (partner) 
                    roleValidated = true;
                    break;
            }
        }));
        return roleValidated;
    }
}