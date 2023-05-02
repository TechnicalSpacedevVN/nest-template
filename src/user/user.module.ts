import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { UserResolver } from './user.resolvers'
import { DateScalar } from 'src/common/scalars/date.scalar'

import { PermissionModule } from './permission/permission.module'
import { AddressModule } from './address/address.module'
import { PaymentModule } from './payment/payment.module'
import { AdminModule } from './admin/admin.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User, UserSchema } from './user.entity'
import { userProviders } from './user.provider'
import { DatabaseModule } from 'src/database.module'
import { ObjectIdScalar } from 'src/common/scalars/ObjectId.scalar'
import { MongooseModule } from '@nestjs/mongoose'
import { RouterModule } from '@nestjs/core'

@Module({
  controllers: [UserController],
  providers: [UserService, UserResolver],
  imports: [
    PermissionModule,
    AddressModule,
    PaymentModule,
    AdminModule,
    RouterModule.register([
      {
        path: 'address',
        module: AddressModule,
      },
      {
        path: 'payment',
        module: PaymentModule,
      },
      {
        path: 'permission',
        module: PermissionModule,
      },
    ]),

    // TypeOrmModule.forFeature([User]),
    // MongooseModule.forRootAsync(process.env.MONGODB_CONNECTION_STRING as any),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
})
export class UserModule {}
