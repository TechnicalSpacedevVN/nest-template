import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class ProductAdmin {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
