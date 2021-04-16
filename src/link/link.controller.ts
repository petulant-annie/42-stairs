import { Controller, Get } from '@nestjs/common';
import { LinkService } from './link.service';

@Controller()
export class LinkController {
  constructor(private readonly appService: LinkService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
