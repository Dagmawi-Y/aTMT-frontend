import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GenerateContentDto } from '../../../content-generation/src/content-generation/dto/generate-content.dto';
import { CreateContentDto } from '../../../content-management/src/content-management/dto/create-content.dto';

@Controller('content')
export class ContentController {
  constructor(
    @Inject('CONTENT_GENERATION_SERVICE')
    private readonly contentGenerationService: ClientProxy,
    @Inject('CONTENT_MANAGEMENT_SERVICE')
    private readonly contentManagementService: ClientProxy,
  ) {}

  @Post('generate')
  async generateContent(@Body() dto: GenerateContentDto) {
    return this.contentGenerationService.send('generate_content', dto);
  }

  @Post()
  async createContent(@Body() dto: CreateContentDto) {
    return this.contentManagementService.send('create_content', dto);
  }

  @Get()
  async getAllContent(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.contentManagementService.send('get_all_content', {
      page,
      limit,
    });
  }

  @Get(':id')
  async getContentById(@Param('id') id: string) {
    return this.contentManagementService.send('get_content_by_id', id);
  }
}
