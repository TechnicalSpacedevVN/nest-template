import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType({ description: 'permission' })
export class Permission {
  @Field({})
  name: string

  @Field((type) => String)
  description: string
}
