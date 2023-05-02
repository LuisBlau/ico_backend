import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBConfig } from './DBConfig';
import { AuthModule } from './modules/auth/auth.module';
import { AuthorizedAccess } from './modules/auth/guards/AuthorizedAccess.guard';
import { SourceValidator } from './modules/auth/validators/source.validator';
import { ICOModule } from './modules/ico/ico.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './modules/user/user.module';
@Module({
  imports: [
    DBConfig,
    UserModule,
    AuthModule,
    ICOModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    SourceValidator,
    {
      provide: APP_GUARD,
      useClass: AuthorizedAccess
    }
  ],
})
export class AppModule {}
