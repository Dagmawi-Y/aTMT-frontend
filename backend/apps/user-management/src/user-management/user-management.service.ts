import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { RabbitMQService } from '@app/common/rabbitmq/rabbitmq.service';
import { LoggingService } from 'libs/common';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class UserManagementService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly rabbitMQService: RabbitMQService,
    private readonly loggingService: LoggingService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userModel
      .findOne({ email: createUserDto.email })
      .exec();
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({
      ...createUserDto,
      passwordHash: hashedPassword,
    });

    const savedUser = await createdUser.save();
    this.loggingService.log(`New user created with email: ${savedUser.email}`);
    return savedUser;
  }

  async getUser(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async updateUserPreferences(
    email: string,
    preferences: Partial<User['preferences']>,
  ): Promise<User> {
    const updatedUser = await this.userModel
      .findOneAndUpdate({ email }, { $set: { preferences } }, { new: true })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }

    this.loggingService.log(`User preferences updated for email: ${email}`);
    return updatedUser;
  }

  async subscribeToCategories(
    email: string,
    categories: string[],
  ): Promise<User> {
    const updatedUser = await this.userModel
      .findOneAndUpdate(
        { email },
        { $addToSet: { subscribedCategories: { $each: categories } } },
        { new: true },
      )
      .exec();

    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }

    this.loggingService.log(
      `User subscribed to categories: ${categories.join(', ')} for email: ${email}`,
    );
    return updatedUser;
  }

  async unsubscribeFromCategories(
    email: string,
    categories: string[],
  ): Promise<User> {
    const updatedUser = await this.userModel
      .findOneAndUpdate(
        { email },
        { $pullAll: { subscribedCategories: categories } },
        { new: true },
      )
      .exec();

    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }

    this.loggingService.log(
      `User unsubscribed from categories: ${categories.join(', ')} for email: ${email}`,
    );
    return updatedUser;
  }

  @MessagePattern('content_added')
  async notifySubscribers(contentData: { category: string; title: string }) {
    const subscribers = await this.userModel
      .find({
        subscribedCategories: contentData.category,
        'preferences.emailNotifications': true,
      })
      .exec();

    for (const subscriber of subscribers) {
      // In a real-world scenario, you would use an email service here
      this.loggingService.log(
        `Notifying user ${subscriber.email} about new content: ${contentData.title}`,
      );
      // Simulate sending an email
      await this.simulateSendEmail(subscriber.email, contentData.title);
    }
  }

  private async simulateSendEmail(
    email: string,
    contentTitle: string,
  ): Promise<void> {
    // This is a placeholder for actual email sending logic
    this.loggingService.log(
      `Simulated email sent to ${email} about new content: ${contentTitle}`,
    );
  }
}
