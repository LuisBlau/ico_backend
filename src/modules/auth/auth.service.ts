import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomNonce, verifySig } from '../../helpers/auth.helpers';
import { ObjectID } from 'mongodb';
import { Auth } from './auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthChallengeResponseDTO } from './DTOs/AuthChallengeResponse.dto';
import { AuthVerifyResponseDTO } from './DTOs/AuthVerifyResponse.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
    @Inject(UserService) 
    private readonly userService: UserService
  ) { }

  async authChallenge(wallet: string): Promise<AuthChallengeResponseDTO> {
    const nonce = randomNonce();
    const signChallenge = `Welcome to Crypto ICO Admin!\n\nClick to sign in \n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nWallet address:\n${wallet}\n\nNonce:\n${nonce}\n\n`
    const challengeId = new ObjectID();
    console.log("authChallenge: ",wallet)
    await this.authRepository.save({
      _id: challengeId,
      wallet,
      signChallenge,
      createdAt: new Date()
    })

    return new AuthChallengeResponseDTO(challengeId, signChallenge);
  }

  async authVerify(challengeId: string, signedData: string): Promise<AuthVerifyResponseDTO | {}> {
    const challenge = await this.authRepository.findOne({
      where: {
        _id: new ObjectID(challengeId)
      },
    });
  
    if (challenge) {
      const { wallet, signChallenge } = challenge;
      console.log("authVerify: ",wallet)
      const isAdmin = await this.userService.checkUserByWallet(wallet);
      console.log("isAdmin: ",isAdmin)
      if(!isAdmin)return {};
      if (verifySig(signedData, wallet, signChallenge)) {
        const token = await this.jwtService.signAsync({
          wallet
        }, {
          expiresIn: "2 days",
          secret: process.env.JWT_SECRET,
        })
        return new AuthVerifyResponseDTO(token, wallet);
      }

    }
    return {};
  }

  async testToken(): Promise<string> {
    const token = await this.jwtService.signAsync({
      //NOTE test wallet
      wallet: "0x616a357ea10bA24Cd339d0e2618Ba9438dd36293".toLowerCase()
    }, {
      expiresIn: "2 days",
      secret: process.env.JWT_SECRET,
    })
    return token;
  }

  async testAuth(): Promise<string> {
    return "authorized";
  }
}
