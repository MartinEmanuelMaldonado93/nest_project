import { User } from '../entities/user.entity';

export class CreateUserDto {
  constructor(private readonly user: User) {
    this.user = user;
  }
}
