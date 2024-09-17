import { Controller, Post, Body } from '@nestjs/common';
import { ContentGenerationService } from './content-generation.service';
import { GenerateContentDto } from './dto/generate-content.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('content')
export class ContentGenerationController {
  constructor(
    private readonly contentGenerationService: ContentGenerationService,
  ) {}

  // Microservice handler
  @MessagePattern('generate_content')
  async generateContent(@Payload() dto: GenerateContentDto) {
    return this.contentGenerationService.generateContent(dto);
  }

  // HTTP handler for testing with Postman
  @Post('generate')
  async generateContentHttp(@Body() dto: GenerateContentDto) {
    return this.contentGenerationService.generateContent(dto);
  }
}
