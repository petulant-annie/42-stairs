import { Controller, Get } from '@nestjs/common';
import { LinkService } from './link.service';

@Controller()
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Get()
  getHello(): any {
    return this.linkService.getHello();
  }
}
