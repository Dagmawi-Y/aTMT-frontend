import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { CreateUserDto } from '../../../user-management/src/user-management/dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_MANAGEMENT_SERVICE')
    private readonly userManagementService: ClientProxy,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userManagementService.send('create_user', createUserDto);
  }

  @Get(':email')
  async getUser(@Param('email') email: string) {
    return this.userManagementService.send('get_user', email);
  }

  @Put(':email/preferences')
  async updateUserPreferences(
    @Param('email') email: string,
    @Body() preferences: any,
  ) {
    return this.userManagementService.send('update_user_preferences', {
      email,
      preferences,
    });
  }

  @Put(':email/subscribe')
  async subscribeToCategories(
    @Param('email') email: string,
    @Body() categories: string[],
  ) {
    return this.userManagementService.send('subscribe_to_categories', {
      email,
      categories,
    });
  }

  @Put(':email/unsubscribe')
  async unsubscribeFromCategories(
    @Param('email') email: string,
    @Body() categories: string[],
  ) {
    return this.userManagementService.send('unsubscribe_from_categories', {
      email,
      categories,
    });
  }
}
