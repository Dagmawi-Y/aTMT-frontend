import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ContentController } from './content/content.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/api-gateway/.env',
    }),
    ClientsModule.registerAsync([
      {
        name: 'CONTENT_GENERATION_SERVICE',
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBITMQ_URL')],
            queue: 'content_generation_queue',
          },
        }),
        inject: [ConfigService],
      },
      {
        name: 'CONTENT_MANAGEMENT_SERVICE',
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBITMQ_URL')],
            queue: 'content_management_queue',
          },
        }),
        inject: [ConfigService],
      },
      {
        name: 'USER_MANAGEMENT_SERVICE',
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBITMQ_URL')],
            queue: 'user_management_queue',
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [ContentController, UserController],
})
export class ApiGatewayModule {}
