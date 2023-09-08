// user-starter-info.dto.ts

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserStarterInfoType {
  @Field()
  id: number;

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

