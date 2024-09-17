import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { UserManagementModule } from './user-management/user-management.module';

async function bootstrap() {
  const app = await NestFactory.create(UserManagementModule);
  const configService = app.get(ConfigService);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [configService.get<string>('RABBITMQ_URL')],
      queue: configService.get<string>('RABBITMQ_QUEUE'),
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
