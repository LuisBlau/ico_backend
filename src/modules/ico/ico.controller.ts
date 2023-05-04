import { Body, Controller, Get, Post, Put, Delete, UploadedFile, UseInterceptors, Param, Res, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Authorized } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';
import { ICOService } from './ico.service';
import { multerOptions } from '../../multerConfig';
import { SettingDTO } from './ico.dto';
import { Response } from 'express';
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

  @Get("sections/how")
  getHowSectionInfo() {
    return this.icoService.getHowSectionInfo();
  }

  @Post("sections/how")
  addHowSectionInfo(@Body() payload: any) {
    return this.icoService.addHowSectionInfo(payload);
  }

  @Put("sections/how/:id")
  async updateHowSectionInfo(@Param('id') id: string, @Body() payload: any, @Res() res: Response) {
    let result = await this.icoService.updateHowSectionInfo(id, payload);
    if (!result) {
      res.status(HttpStatus.BAD_REQUEST).send();
    } else {
      res.status(HttpStatus.OK).json(result);
    }
  }

  @Delete("sections/how/:id")
  deleteHowSectionInfo(@Param('id') id: string) {
    return this.icoService.deleteHowSectionInfo(id);
  }

  @Get("sections/team")
  getTeamSectionInfo() {
    return this.icoService.getTeamSectionInfo();
  }

  @Post("sections/team")
  addTeamSectionInfo(@Body() payload: any) {
    return this.icoService.addTeamSectionInfo(payload);
  }

  @Put("sections/team/:id")
  async updateTeamSectionInfo(@Param('id') id: string, @Body() payload: any, @Res() res: Response) {
    let result = await this.icoService.updateTeamSectionInfo(id, payload);
    if (!result) {
      res.status(HttpStatus.BAD_REQUEST).send();
    } else {
      res.status(HttpStatus.OK).json(result);
    }
  }

  @Delete("sections/team/:id")
  deleteTeamSectionInfo(@Param('id') id: string) {
    return this.icoService.deleteTeamSectionInfo(id);
  }

  @Get("sections/roadmap")
  getRoadmapSectionInfo() {
    return this.icoService.getRoadmapSectionInfo();
  }

  @Post("sections/roadmap")
  addRoadmapSectionInfo(@Body() payload: any) {
    return this.icoService.addRoadmapSectionInfo(payload);
  }

  @Put("sections/roadmap/:id")
  async updateRoadmapSectionInfo(@Param('id') id: string, @Body() payload: any, @Res() res: Response) {
    let result = await this.icoService.updateRoadmapSectionInfo(id, payload);
    if (!result) {
      res.status(HttpStatus.BAD_REQUEST).send();
    } else {
      res.status(HttpStatus.OK).json(result);
    }
  }

  @Delete("sections/roadmap/:id")
  deleteRoadmapSectionInfo(@Param('id') id: string) {
    return this.icoService.deleteRoadmapSectionInfo(id);
  }

  @Get("sections/faq")
  getFaqSectionInfo() {
    return this.icoService.getFaqSectionInfo();
  }

  @Post("sections/faq")
  addFaqSectionInfo(@Body() payload: any) {
    return this.icoService.addFaqSectionInfo(payload);
  }

  @Put("sections/faq/:id")
  async updateFaqSectionInfo(@Param('id') id: string, @Body() payload: any, @Res() res: Response) {
    let result = await this.icoService.updateFaqSectionInfo(id, payload);
    if (!result) {
      res.status(HttpStatus.BAD_REQUEST).send();
    } else {
      res.status(HttpStatus.OK).json(result);
    }
  }

  @Delete("sections/faq/:id")
  deleteFaqSectionInfo(@Param('id') id: string) {
    return this.icoService.deleteFaqSectionInfo(id);
  }
}
