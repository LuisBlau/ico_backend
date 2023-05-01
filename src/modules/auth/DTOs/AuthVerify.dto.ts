import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthVerifyDTO {
    @IsString()
    @IsNotEmpty()
    challengeId: string;

    @IsString()
    @IsNotEmpty()
    signedData: string;

  } 