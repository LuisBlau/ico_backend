import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({

  imports: [
    JwtModule.register({}),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [],
  providers: [
    UserService,
  ],
  exports: [
    UserService
  ]
})
export class UserModule { }
