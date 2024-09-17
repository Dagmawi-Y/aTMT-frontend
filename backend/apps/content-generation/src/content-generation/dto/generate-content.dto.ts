import { IsString, IsEnum, IsOptional } from 'class-validator';

export enum ContentCategory {
  Technology = 'Technology',
  Science = 'Science',
  History = 'History',
  Business = 'Business',
  Health = 'Health',
  ArtCulture = 'Art & Culture',
}

export class GenerateContentDto {
  @IsEnum(ContentCategory)
  category: ContentCategory;

  @IsString()
  @IsOptional()
  prompt?: string;
}
