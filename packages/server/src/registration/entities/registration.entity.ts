// src/company/company.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Registration {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  state: string;

  @Column()
  @Field()
  address: string;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  country: string;

  @Column()
  @Field()
  companyRegistrationNumber: string;

  @Column()
  @Field()
  panNumber: string;

  @Column('float')
  @Field(() => Float)
  annualTurnOver: number;

  @Column()
  @Field()
  gstNumber: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  designation: string;

  @Column()
  @Field()
  mobNumber: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  website: string;

  @Column()
  @Field()
  userType: string;

  @Column()
  @Field()
  companyType: string;

  @Column()
  @Field()
  compBillingCode: string;
}
