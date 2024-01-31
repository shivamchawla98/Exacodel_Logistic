import { InputType, Field } from "@nestjs/graphql";
@InputType()
export class ResetPasswordInput {
    @Field()
    password: string;
    @Field()
    confirmPassword: string;
}