import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JWTStrategy } from './auth.strategy';
import { AuthorizedAccess } from './guards/AuthorizedAccess.guard';
import { SourceValidator } from './validators/source.validator';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
@Module({
   
  imports: [
    JwtModule.register({}),
    TypeOrmModule.forFeature([Auth]),
    UserModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JWTStrategy,
    AuthorizedAccess,
    SourceValidator,
  ],
})
export class AuthModule { }
