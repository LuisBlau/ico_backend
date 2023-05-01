import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { ObjectID } from 'mongodb';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    ) {}

  async checkUserByWallet(wallet:string): Promise<boolean> {

    const user = await this.usersRepository.findOne({
      where: {
        wallet: wallet.toLowerCase()
      },
    })
    if(user)return true;
    return false;
  }
  
}
