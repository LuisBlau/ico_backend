import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Authorized } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';
import { ICOService } from './ico.service';
import { multerOptions } from '../../multerConfig';
import { SettingDTO } from './ico.dto';

@Controller("ico")
export class ICOController {
  constructor(private readonly icoService: ICOService) { }

  @Authorized(Role.ADMIN)
  @Post("sale/start")
  startSale(): string {
    return this.icoService.startSale();
  }
  @Post("sale/stop")
  stopSale(): string {
    return this.icoService.stopSale();
  }
  @Post("tokens/collect")
  collectTokens(): string {
    return this.icoService.collectTokens();
  }
  @Post("balance/collect")
  collectAmount(): string {
    return this.icoService.collectBalance();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return `/uploads/${file.filename}`;
  }

  @Post("setting")
  saveSetting(@Body() setting: any) {
    return this.icoService.saveSetting(setting);
  }

  @Get("setting")
  getSetting() {
    return this.icoService.getSetting();
  }
}
