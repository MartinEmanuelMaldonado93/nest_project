import { Injectable } from '@nestjs/common/decorators/core';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserSchema, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}
  /** This action adds a new user  */
  create(createUserDto: CreateUserDto) {
    return 'a';
  }
  /** This function returns the entire list of users */
  async findAll() {
    const users = await this.userModel.find();
    if (!users) throw new Error('user is not found');
    return users;
  }

  async findOneByID(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) throw new Error('User is not found');
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
