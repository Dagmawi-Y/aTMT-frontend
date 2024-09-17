import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RabbitMQModule, DatabaseModule, LoggingService } from 'libs/common';
import { ContentManagementController } from './content-management.controller';
import { ContentManagementService } from './content-management.service';
import { Content, ContentSchema } from './schemas/content.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/content-management/.env',
    }),
    RabbitMQModule,
    DatabaseModule,
    MongooseModule.forFeature([{ name: Content.name, schema: ContentSchema }]),
  ],
  controllers: [ContentManagementController],
  providers: [ContentManagementService, LoggingService],
})
export class ContentManagementModule {}
