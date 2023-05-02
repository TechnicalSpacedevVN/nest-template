import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class UserPermissionAdmin {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
