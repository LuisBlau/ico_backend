import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
@Injectable()
export class ICOService {
  constructor(
    
    ) {}
  startSale(): string {
 
    
    return 'startSale';
  }
  stopSale(): string {
    return 'stopSale';
  }

  collectTokens(): string {
    //NOTE: after ico ends
    return 'collectTokens';
  }
  collectBalance(): string {
    //NOTE: any time
    return 'collectAmount';
  }
}
