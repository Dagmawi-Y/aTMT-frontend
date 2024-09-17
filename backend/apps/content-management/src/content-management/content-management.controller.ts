import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ContentManagementService } from './content-management.service';
import { CreateContentDto } from './dto/create-content.dto';

@Controller()
export class ContentManagementController {
  constructor(
    private readonly contentManagementService: ContentManagementService,
  ) {}

  @MessagePattern('create_content')
  async createContent(@Payload() createContentDto: CreateContentDto) {
    return this.contentManagementService.createContent(createContentDto);
  }

  @MessagePattern('get_all_content')
  async getAllContent(
    @Payload() { page, limit }: { page: number; limit: number },
  ) {
    return this.contentManagementService.getAllContent(page, limit);
  }

  @MessagePattern('get_content_by_id')
  async getContentById(@Payload() id: string) {
    return this.contentManagementService.getContentById(id);
  }

  @MessagePattern('update_content')
  async updateContent(
    @Payload()
    {
      id,
      updateContentDto,
    }: {
      id: string;
      updateContentDto: Partial<CreateContentDto>;
    },
  ) {
    return this.contentManagementService.updateContent(id, updateContentDto);
  }

  @MessagePattern('delete_content')
  async deleteContent(@Payload() id: string) {
    return this.contentManagementService.deleteContent(id);
  }
}
