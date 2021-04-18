// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LinkModule } from './link/link.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_DB), LinkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
