import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LinkDocument } from './link.schema';

@Injectable()
export class LinkService {
  constructor(@InjectModel('Links') private linkModel: Model<LinkDocument>) { }

  getHello(): string {
    return 'Hello World!';
  }
}
