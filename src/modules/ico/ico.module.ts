import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ICOController } from './ico.controller';
import { ICOService } from './ico.service';

@Module({
  imports: [
    JwtModule.register({}),
  ],
  controllers: [ICOController],
  providers: [
    ICOService,
  
  ],
})
export class ICOModule {}
