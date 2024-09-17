import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserManagementService } from './user-management.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserManagementController {
  constructor(private readonly userManagementService: UserManagementService) {}

  @MessagePattern('create_user')
  async createUser(@Payload() createUserDto: CreateUserDto) {
    return this.userManagementService.createUser(createUserDto);
  }

  @MessagePattern('get_user')
  async getUser(@Payload() email: string) {
    return this.userManagementService.getUser(email);
  }

  @MessagePattern('update_user_preferences')
  async updateUserPreferences(
    @Payload() data: { email: string; preferences: any },
  ) {
    return this.userManagementService.updateUserPreferences(
      data.email,
      data.preferences,
    );
  }

  @MessagePattern('subscribe_to_categories')
  async subscribeToCategories(
    @Payload() data: { email: string; categories: string[] },
  ) {
    return this.userManagementService.subscribeToCategories(
      data.email,
      data.categories,
    );
  }

  @MessagePattern('unsubscribe_from_categories')
  async unsubscribeFromCategories(
    @Payload() data: { email: string; categories: string[] },
  ) {
    return this.userManagementService.unsubscribeFromCategories(
      data.email,
      data.categories,
    );
  }
}
