import { SetMetadata } from "@nestjs/common";
import { Role } from "../enums/role.enum";

export const Authorized = (...roles: Role[]) => SetMetadata('AuthorizedRoles', roles);