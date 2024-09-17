import { IsString, IsEnum, IsUrl, IsArray, IsOptional } from 'class-validator';
import { ContentCategory } from 'apps/content-generation/src/content-generation/dto/generate-content.dto';

export class CreateContentDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsEnum(ContentCategory)
  category: ContentCategory;

  @IsUrl()
  imageUrl: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];
}
