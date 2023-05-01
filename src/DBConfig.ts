import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DB_URI,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoLoadEntities: true,
      entities: [join(__dirname, '/**/**.entity{.ts,.js}')],
    }),
  ],
  exports: [DBConfig],
  controllers: [],
  providers: [],
})
export class DBConfig {}
