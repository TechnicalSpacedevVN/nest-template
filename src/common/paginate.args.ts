import { ArgsType, Field, Int } from '@nestjs/graphql'
import { Max, Min } from 'class-validator'

@ArgsType()
export class PaginateArgs {
  @Field((type) => Int)
  @Min(0)
  skip = 0

  @Field((type) => Int)
  @Min(1)
  limit = 15
}
