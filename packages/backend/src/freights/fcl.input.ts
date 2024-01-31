import { InputType, Field,ObjectType,Float} from '@nestjs/graphql';

@InputType()
@ObjectType()
export class  fclCity{
    @Field({nullable:true})
    name:string;
    @Field({nullable:true})
    code:string;
    @Field({nullable:true})
    countrycode:string;
    @Field({nullable:true})
    postcode:string;
    @Field(() => Float, { nullable: true })
    lat:number;
    @Field(() => Float, { nullable: true })
    long:number;




}