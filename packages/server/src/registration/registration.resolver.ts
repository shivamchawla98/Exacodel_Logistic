// src/company/registration.resolver.ts
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { RegistrationService } from './registration.service';
import { Registration } from './entities/registration.entity';
import {
  CreateRegistrationInput,
  UpdateRegistrationInput,
} from './dto/registration.dto';

@Resolver(() => Registration)
export class RegistrationResolver {
  constructor(private readonly registrationService: RegistrationService) {}

  @Mutation(() => Registration)
  async createRegistration(@Args('input') input: CreateRegistrationInput) {
    return await this.registrationService.createRegistration(input);
  }

  @Mutation(() => Registration)
  async updateRegistration(
    @Args('id') id: number,
    @Args('input') input: UpdateRegistrationInput,
  ) {
    return await this.registrationService.updateRegistration(id, input);
  }

  @Mutation(() => Boolean)
  async deleteRegistration(@Args('id') id: number) {
    return await this.registrationService.deleteRegistration(id);
  }

  @Query(() => Registration)
  async getRegistration(@Args('id') id: number) {
    return await this.registrationService.getRegistration(id);
  }

  @Query(() => [Registration])
  async getAllRegistration() {
    return await this.registrationService.getAllRegistration();
  }
}
