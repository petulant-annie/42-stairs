import { Test, TestingModule } from '@nestjs/testing';
import { LinkController } from './link.controller';
import { LinkModule } from './link.module';
import { LinkService } from './link.service';

describe('LinkController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [LinkModule],
      controllers: [LinkController],
      providers: [LinkService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<LinkController>(LinkController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
