import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HowSectionInfo } from './entities/howsectioninfo.entity';
import { Setting } from './entities/setting.entity';
import { TeamSectionInfo } from './entities/teamsectioninfo.entity';
import { ICOController } from './ico.controller';
import { ICOService } from './ico.service';

@Module({
  imports: [
    JwtModule.register({}),
    TypeOrmModule.forFeature([Setting]),
    TypeOrmModule.forFeature([HowSectionInfo]),
    TypeOrmModule.forFeature([TeamSectionInfo]),
  ],
  controllers: [ICOController],
  providers: [
    ICOService,
  ],
})
export class ICOModule {}
