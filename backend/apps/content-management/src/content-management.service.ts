import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
