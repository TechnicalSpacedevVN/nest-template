import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm'
import { Field, Int, ObjectType } from '@nestjs/graphql'
import { ObjectIdScalar } from 'src/common/scalars/ObjectId.scalar'

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

@ObjectType({ description: 'user' }) // graphQL
@Schema()
// @Entity()
export class User {
  // @Prop({ type: ObjectId })
  @Field((type) => String)
  id: string

  @Field({ nullable: true })
  @Prop()
  firstName: string

  @Field({ nullable: true })
  @Prop()
  lastName: string
}

export const UserSchema = SchemaFactory.createForClass(User)
