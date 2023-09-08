import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserStarterInfoService } from './starterForm.service';
import { UserStarterInfoType } from './dto/user-starter-info.dto';
import { CreateStarterFormInput } from './dto/create-registration.input';
import { UpdateStarterFormInput } from './dto/update-registration.input';

@Resolver(() => UserStarterInfoType)
export class UserStarterInfoResolver {
  constructor(
    private readonly userStarterInfoService: UserStarterInfoService,
  ) {}

  @Query(() => [UserStarterInfoType])
  async getUserStarterInfo(): Promise<UserStarterInfoType[]> {
    return await this.userStarterInfoService.findAll();
  }

  @Query(() => UserStarterInfoType, { nullable: true })
  async getUserStarterInfoById(
    @Args('id') id: number,
  ): Promise<UserStarterInfoType | null> {
    return this.userStarterInfoService.findById(id);
  }

  @Mutation(() => UserStarterInfoType)
  async createUserStarterInfo(
    @Args('input') input: CreateStarterFormInput,
  ): Promise<UserStarterInfoType> {
    return await this.userStarterInfoService.create(input);
  }

  // @Mutation(() => UserStarterInfoType)
  // async updateUserStarterInfo(
  //   @Args('input') input: UpdateRegistrationInput,
  // ): Promise<UserStarterInfoType> {
  //   return this.userStarterInfoService.update(input);
  // }
}
