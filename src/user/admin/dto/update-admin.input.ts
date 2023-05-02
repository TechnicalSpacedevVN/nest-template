import { createUserAdminInput } from './create-admin.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateAdminInput extends PartialType(createUserAdminInput) {
  @Field(() => Int)
  id: number
}
