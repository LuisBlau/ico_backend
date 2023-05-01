import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { AuthedUserContext } from "../types/AuthedUser.context";

export type AuthContext = {
  user: AuthedUserContext,
}

export const AuthContextExtractor = createParamDecorator(async (
  data: string | undefined, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  return {
    user: request.user,
  };
})