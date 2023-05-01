import { Injectable } from "@nestjs/common";
import { AuthedUserContext } from "../types/AuthedUser.context";

@Injectable()
export class SourceValidator {
  constructor(
    ) { }

  async validatePartner(wallet: string): Promise<string> {
    return wallet;
  }
}