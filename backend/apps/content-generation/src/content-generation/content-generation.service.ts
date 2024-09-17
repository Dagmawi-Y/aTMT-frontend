import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RabbitMQService } from '@app/common/rabbitmq/rabbitmq.service';
import { LoggingService } from 'libs/common';
import {
  GenerateContentDto,
  ContentCategory,
} from './dto/generate-content.dto';
import axios from 'axios';

@Injectable()
export class ContentGenerationService {
  private readonly geminiApiKey: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly rabbitMQService: RabbitMQService,
    private readonly loggingService: LoggingService,
  ) {
    this.geminiApiKey = this.configService.get<string>('GEMINI_API_KEY');
  }

  async generateContent(dto: GenerateContentDto): Promise<any> {
    try {
      const prompt = dto.prompt || this.getDefaultPrompt(dto.category);
      const content = await this.callGeminiApi(prompt);

      // Send generated content to Content Management Service
      await this.rabbitMQService.emit('content_generated', {
        category: dto.category,
        content: content,
      });

      this.loggingService.log(
        `Content generated for category: ${dto.category}`,
      );
      return content;
    } catch (error) {
      this.loggingService.error(
        `Error generating content: ${error.message}`,
        error.stack,
      );
      throw error;
    }
  }

  private async callGeminiApi(prompt: string): Promise<string> {
    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
        {
          contents: [{ parts: [{ text: prompt }] }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': this.geminiApiKey,
          },
        },
      );

      return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
      this.loggingService.error(
        `Error calling Gemini API: ${error.message}`,
        error.stack,
      );
      throw new Error('Failed to generate content');
    }
  }

  private getDefaultPrompt(category: ContentCategory): string {
    const prompts = {
      [ContentCategory.Technology]:
        'Write a blog post about the latest trends in artificial intelligence.',
      [ContentCategory.Science]:
        'Explain a recent breakthrough in quantum physics for a general audience.',
      [ContentCategory.History]:
        'Describe a lesser-known historical event that had a significant impact on modern society.',
      [ContentCategory.Business]:
        'Analyze the current state of cryptocurrency and its potential future in global finance.',
      [ContentCategory.Health]:
        'Discuss the importance of mental health awareness and provide tips for maintaining good mental health.',
      [ContentCategory.ArtCulture]:
        'Explore the influence of digital technology on contemporary art movements.',
    };

    return (
      prompts[category] ||
      'Write an informative blog post on an interesting topic.'
    );
  }
}
