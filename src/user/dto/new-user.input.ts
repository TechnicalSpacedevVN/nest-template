import { Field, InputType } from '@nestjs/graphql'
import { MaxLength } from 'class-validator'

@InputType()
export class NewUserInput {
  @Field()
  @MaxLength(30)
  firstName: string

  @Field()
  @MaxLength(30)
  lastName: string
}
