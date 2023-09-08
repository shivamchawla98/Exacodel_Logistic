import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStarterFormInput {
  @Field()
  gstNumber: string;

  @Field()
  companyName: string;

  @Field()
  customerRole: string;

  @Field()
  userType: string;

  @Field()
  country: string;

  // Add other fields as needed
}
