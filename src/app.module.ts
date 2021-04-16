require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LinkController } from './link/link.controller';
import { LinkModule } from './link/link.module';
import { LinkService } from './link/link.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DB),
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
