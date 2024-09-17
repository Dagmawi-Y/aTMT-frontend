import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RabbitMQModule, DatabaseModule, LoggingService } from 'libs/common';
import { UserManagementController } from './user-management.controller';
import { UserManagementService } from './user-management.service';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/user-management/.env',
    }),
    RabbitMQModule,
    DatabaseModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserManagementController],
  providers: [UserManagementService, LoggingService],
})
export class UserManagementModule {}
