import { Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';

@Resolver((of) => String)
export class AppResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
