import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateStarterFormInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  gstNumber?: string;

  @Field({ nullable: true })
  companyName?: string;

  @Field({ nullable: true })
  customerRole?: string;

  @Field({ nullable: true })
  userType?: string;

  @Field({ nullable: true })
  country?: string;

  // Add other fields as needed
}
