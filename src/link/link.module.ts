import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LinkController } from './link.controller';
import { LinkSchema } from './link.schema';
import { LinkService } from './link.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Links', schema: LinkSchema }])],
  controllers: [LinkController],
  providers: [LinkService],
})
export class LinkModule {}
