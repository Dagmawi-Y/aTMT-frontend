import { Test, TestingModule } from '@nestjs/testing';
import { ContentGenerationController } from './content-generation.controller';
import { ContentGenerationService } from './content-generation.service';

describe('ContentGenerationController', () => {
  let contentGenerationController: ContentGenerationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ContentGenerationController],
      providers: [ContentGenerationService],
    }).compile();

    contentGenerationController = app.get<ContentGenerationController>(ContentGenerationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(contentGenerationController.getHello()).toBe('Hello World!');
    });
  });
});
