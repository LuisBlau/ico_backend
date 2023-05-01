import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthChallengeDTO {
    @IsString()
    @IsNotEmpty()
    @Transform((param) => param.value.toLowerCase())
    wallet: string;
  } 