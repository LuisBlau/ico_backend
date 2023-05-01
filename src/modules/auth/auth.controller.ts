import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthContextExtractor } from './decorators/AuthContextExtractor.decorator';
import { Authorized } from './decorators/roles.decorator';
import { AuthChallengeDTO } from './DTOs/AuthChallenge.dto';
import { AuthChallengeResponseDTO } from './DTOs/AuthChallengeResponse.dto';
import { AuthVerifyDTO } from './DTOs/AuthVerify.dto';
import { AuthVerifyResponseDTO } from './DTOs/AuthVerifyResponse.dto';
import { Role } from './enums/role.enum';
import { AuthedUserContext } from './types/AuthedUser.context';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get("challenge/:wallet")
  authChallenge(@Param() authChallengeDTO: AuthChallengeDTO): Promise<AuthChallengeResponseDTO> {
    console.log("authChallengeDTO: ", authChallengeDTO)
    return this.authService.authChallenge(authChallengeDTO.wallet);
  }
  @Post("verify")
  authVerify(@Body() authVerifyDTO: AuthVerifyDTO): Promise<AuthVerifyResponseDTO | {}> {
    return this.authService.authVerify(authVerifyDTO.challengeId, authVerifyDTO.signedData);
  }


  @Get('token')
  signup(): Promise<string> {
    return this.authService.testToken();
  }

  @Authorized(Role.ADMIN)
  @Get('test')
  test(@AuthContextExtractor() context: AuthedUserContext): Promise<string> {
    console.log("context: ", context);
    return this.authService.testAuth();
  }

}
