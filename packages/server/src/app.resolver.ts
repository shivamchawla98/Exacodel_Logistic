import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { User } from './users/entities/user.entity';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from './auth/jwt.guard';

@Resolver((of) => String)
export class AppResolver {
  constructor(private readonly configService: ConfigService) {}

  @Query((returns) => String)
  @UseGuards(JwtGuard)
  securedResources(): string {
    return 'this data is only seen by authenticated users';
  }

  @Query((returns) => String)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Context('user') user: User,
  ): string {
    let payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };
    return jwt.sign(payload, this.configService.get('jwt_key'), {
      expiresIn: '120s',
    });
  }
}
