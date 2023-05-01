import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hc")
  @HttpCode(200)
  healthCheck(): string {
    return this.appService.healthCheck();
  }
}
