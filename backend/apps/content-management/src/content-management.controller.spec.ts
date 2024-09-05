import { Test, TestingModule } from '@nestjs/testing';
import { ContentManagementController } from './content-management.controller';
import { ContentManagementService } from './content-management.service';

describe('ContentManagementController', () => {
  let contentManagementController: ContentManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ContentManagementController],
      providers: [ContentManagementService],
    }).compile();

    contentManagementController = app.get<ContentManagementController>(ContentManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(contentManagementController.getHello()).toBe('Hello World!');
    });
  });
});
