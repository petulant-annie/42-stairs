import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LinkSchema } from './link.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Links', schema: LinkSchema }])],
  controllers: [],
  providers: [],
})
export class LinkModule {}
