import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class PromotionAdmin {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
