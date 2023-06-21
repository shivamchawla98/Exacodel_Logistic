import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) public readonly UserRepo: Repository<User>,
  ) {}

  async findUserByEmail(email: string) {
    let user: User = await this.UserRepo.findOne({ where: { email: email } });
    return user;
  }
}
