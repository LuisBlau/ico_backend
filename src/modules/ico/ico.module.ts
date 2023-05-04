import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FaqSectionInfo } from './entities/faqsectioninfo.entity';
import { HowSectionInfo } from './entities/howsectioninfo.entity';
import { RoadmapSectionInfo } from './entities/roadmapsectioninfo.entity';
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
    TypeOrmModule.forFeature([RoadmapSectionInfo]),
    TypeOrmModule.forFeature([FaqSectionInfo]),
  ],
  controllers: [ICOController],
  providers: [
    ICOService,
  ],
})
export class ICOModule {}
