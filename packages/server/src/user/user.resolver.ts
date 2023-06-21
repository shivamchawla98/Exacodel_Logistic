import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { query } from 'express';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import * as jwt from 'jsonwebtoken';
import { JwtGuard } from 'src/auth/jwt.guard';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => String)
  @UseGuards(JwtGuard)
  securedResource(@Context("user") user: User ): string {
    return 'This is secured resource';
  }

  @Query((returns) => String)
  @UseGuards(AuthGuard)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Context('user') user: User,
  ): string {
    let payload = {
      id: user.user_id,
      fistName: user.first_name,
      lastName: user.last_name,
      email: user.email,
    };
    return jwt.sign(payload, 'key need to be change', { expiresIn: '60s' });
  }
}
