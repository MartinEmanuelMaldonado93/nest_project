import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common/decorators/http';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Controller } from '@nestjs/common/decorators/core';
import { Response } from 'express';
import { HttpStatus } from '@nestjs/common/enums/http-status.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Get('all')
  async findAll(@Res() res: Response) {
    const data = await this.usersService.findAll();
    res.status(HttpStatus.OK).json({
      data: data,
      code: 200,
      message: 'successfully fetch data',
      success: true,
    });
  }

  @Get(':id')
  async findOneByID(@Res() res: Response, @Param('id') id: string) {
    // if (Number.isNaN(+id)) throw new Error('Id must be a number');
    const data = await this.usersService.findOneByID(id);
    try {
      res.status(HttpStatus.OK).json({
        data,
        code: 200,
        message: 'successfully fetch data',
        success: true,
      });
    } catch (error) {
      throw new Error(`findOne error`);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
