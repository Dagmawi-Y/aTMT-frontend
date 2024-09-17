import { IsString, IsEmail, IsEnum, IsOptional } from 'class-validator';
import { ContentCategory } from 'apps/content-generation/src/content-generation/dto/generate-content.dto';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEnum(ContentCategory, { each: true })
  @IsOptional()
  subscribedCategories?: ContentCategory[];
}
