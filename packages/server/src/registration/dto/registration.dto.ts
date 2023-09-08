import { InputType, Field, Float, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateRegistrationInput {
  @Field()
  name: string;

  @Field()
  state: string;

  @Field()
  address: string;

  @Field()
  city: string;

  @Field()
  country: string;

  @Field()
  companyRegistrationNumber: string;

  @Field()
  panNumber: string;

  @Field(() => Float)
  annualTurnOver: number;

  @Field()
  gstNumber: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  designation: string;

  @Field()
  mobNumber: string;

  @Field()
  email: string;

  @Field()
  website: string;

  @Field({ nullable: true })
  userType: string;

  @Field({ nullable: true })
  companyType: string;

  @Field()
  compBillingCode: string;
}

@InputType()
export class UpdateRegistrationInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  companyRegistrationNumber?: string;

  @Field({ nullable: true })
  panNumber?: string;

  @Field(() => Float, { nullable: true })
  annualTurnOver?: number;

  @Field({ nullable: true })
  gstNumber?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  designation?: string;

  @Field({ nullable: true })
  mobNumber?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  website?: string;

  @Field({ nullable: true })
  userType?: string;

  @Field({ nullable: true })
  companyType?: string;

  @Field({ nullable: true })
  compBillingCode?: string;
}