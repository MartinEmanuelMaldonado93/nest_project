import { Get } from '@nestjs/common/decorators/http';
import { AppService } from './app.service';
import { Controller } from '@nestjs/common/decorators/core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
