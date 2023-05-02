import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType({ description: 'user' })
export class User {
  @Field((type) => Int)
  id: number

  @Field({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  lastName?: string
}
