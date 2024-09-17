import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RabbitMQService } from '@app/common/rabbitmq/rabbitmq.service';
import { LoggingService } from 'libs/common';
import { Content, ContentDocument } from './schemas/content.schema';
import { CreateContentDto } from './dto/create-content.dto';
import { MessagePattern } from '@nestjs/microservices';
import { ContentCategory } from 'apps/content-generation/src/content-generation/dto/generate-content.dto';

@Injectable()
export class ContentManagementService {
  constructor(
    @InjectModel(Content.name) private contentModel: Model<ContentDocument>,
    private readonly rabbitMQService: RabbitMQService,
    private readonly loggingService: LoggingService,
  ) {}

  async createContent(createContentDto: CreateContentDto): Promise<Content> {
    const createdContent = new this.contentModel(createContentDto);
    const savedContent = await createdContent.save();
    this.loggingService.log(`New content created with ID: ${savedContent._id}`);
    return savedContent;
  }

  async getAllContent(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ content: Content[]; total: number }> {
    const skip = (page - 1) * limit;
    const [content, total] = await Promise.all([
      this.contentModel.find().skip(skip).limit(limit).exec(),
      this.contentModel.countDocuments(),
    ]);
    return { content, total };
  }

  async getContentById(id: string): Promise<Content> {
    return this.contentModel.findById(id).exec();
  }

  async updateContent(
    id: string,
    updateContentDto: Partial<CreateContentDto>,
  ): Promise<Content> {
    const updatedContent = await this.contentModel
      .findByIdAndUpdate(id, updateContentDto, { new: true })
      .exec();
    this.loggingService.log(`Content updated with ID: ${id}`);
    return updatedContent;
  }

  async deleteContent(id: string): Promise<void> {
    await this.contentModel.findByIdAndDelete(id).exec();
    this.loggingService.log(`Content deleted with ID: ${id}`);
  }

  @MessagePattern('content_generated')
  async handleGeneratedContent(data: { category: string; content: string }) {
    const createContentDto: CreateContentDto = {
      title: this.generateTitle(data.content),
      content: data.content,
      category: data.category as ContentCategory,
      imageUrl: await this.getRandomImageUrl(data.category),
      tags: this.generateTags(data.content),
    };

    await this.createContent(createContentDto);
    this.loggingService.log('Generated content saved to database');
  }

  private generateTitle(content: string): string {
    // Implement logic to generate a title from the content
    // This is a simplified example
    return content.split('.')[0];
  }

  private generateTags(content: string): string[] {
    // Implement logic to generate tags from the content
    // This is a simplified example
    return content.split(' ').slice(0, 5);
  }

  private async getRandomImageUrl(category: string): Promise<string> {
    // Implement logic to get a random image URL based on the category
    // This is a placeholder implementation
    return `https://example.com/images/${category.toLowerCase()}.jpg`;
  }
}
