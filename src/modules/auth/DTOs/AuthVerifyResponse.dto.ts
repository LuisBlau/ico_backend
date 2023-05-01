export class AuthVerifyResponseDTO {
    constructor(
      public readonly token: string,
      public readonly wallet: string,
    ) {}
  }