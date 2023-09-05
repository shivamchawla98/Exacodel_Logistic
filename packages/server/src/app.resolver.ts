import { Args, Context, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { UserService } from './user/user.service';
import { type } from 'os';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';
import * as jwt from 'jsonwebtoken';
import { User } from './user/entity/user.entity';

@Resolver((of) => String)
export class AppResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Query(() => String)
  @UseGuards(AuthGuard)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Context('user') user: User,
  ): string {

    let payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: 
    };


  }
}
