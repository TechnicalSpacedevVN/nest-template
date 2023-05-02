// import { CustomScalar, Scalar } from '@nestjs/graphql'
// import { Kind, ValueNode } from 'graphql'
// import { ObjectId } from 'typeorm'

// @Scalar('ObjectId', (type) => ObjectId)
// export class ObjectIdScalar implements CustomScalar<string, ObjectId> {
//   description = 'ObjectId custom scalar type'

//   parseValue(value: string): ObjectId {
//     return new ObjectId(value) // value from the client
//   }

//   serialize(value: ObjectId): string {
//     return value.toString() // value sent to the client
//   }

//   parseLiteral(ast: ValueNode): ObjectId {
//     if (ast.kind === Kind.STRING) {
//       return new ObjectId(ast.value)
//     }
//     return new ObjectId()
//   }
// }

import { GraphQLScalarType } from 'graphql'
import { ObjectId } from 'typeorm'

function validate(value: any): ObjectId {
  if (!ObjectId.isValid(value)) {
    throw new Error('invalid ObjectId')
  }
  return new ObjectId(value)
}

export const ObjectIdScalar = new GraphQLScalarType<ObjectId, string>({
  name: 'ObjectId',
  description: 'A simple bjectId parser',
  serialize: (value: ObjectId) => value.toString(),
  parseValue: (value) => validate(value),
  parseLiteral: (ast: any) => validate(ast.value) as any,
})
