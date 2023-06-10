import { Args, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { UserService } from './user/user.service';

@Resolver((of) => String)
export class AppResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
