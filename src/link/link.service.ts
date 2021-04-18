import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common/http/http.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LinkDocument } from './link.schema';

@Injectable()
export class LinkService {
  // constructor(@InjectModel('Links') private linkModel: Model<LinkDocument>) {}
  constructor(private httpService: HttpService) {}

  async getHello(): Promise<any> {
    const response = await this.httpService
      .get('https://api.github.com/repos/nestjs/nest/branches')
      .toPromise();

    return response.data;
  }
}
