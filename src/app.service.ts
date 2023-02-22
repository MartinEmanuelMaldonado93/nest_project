import { Injectable } from '@nestjs/common/decorators/core';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
