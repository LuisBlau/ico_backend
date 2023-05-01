
export class AuthChallengeResponseDTO {
    constructor(
      public readonly challengeId: string,
      public readonly signChallenge: string,
    ) {}
  }