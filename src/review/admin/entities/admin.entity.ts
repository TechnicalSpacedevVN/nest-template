import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class ReviewAdmin {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
