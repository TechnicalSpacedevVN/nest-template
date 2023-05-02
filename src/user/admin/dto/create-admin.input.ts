import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class createUserAdminInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
