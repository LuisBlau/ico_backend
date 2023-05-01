import { Controller, Get, Post } from '@nestjs/common';
import { Authorized } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';
import { ICOService } from './ico.service';

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
}
