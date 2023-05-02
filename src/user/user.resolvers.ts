import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { UserService } from './user.service'
import { NotFoundException } from '@nestjs/common'
import { PaginateArgs } from 'src/common/paginate.args'
import { NewUserInput } from './dto/new-user.input'
import { User } from './user.entity'
import { isValidObjectId } from 'mongoose'
import { ObjectId } from 'mongodb'
const pubSub = new PubSub()

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query((returns) => User)
  async user(@Args('id') id: string): Promise<User> {
    const user = await this.userService.findById(id)
    if (!user) {
      throw new NotFoundException(id)
    }

    return user
  }

  @Query((returns) => [User])
  users(@Args() paginateArgs: PaginateArgs): Promise<User[]> {
    return this.userService.findAll(paginateArgs)
  }

  @Query((returns) => Number)
  count() {
    return this.userService.count()
  }

  @Mutation((returns) => User)
  async addUser(@Args('newUserData') newUser: NewUserInput): Promise<User> {
    const user = await this.userService.create(newUser)
    pubSub.publish('userAdded', { userAdded: user })
    return user
  }

  @Mutation((returns) => Boolean)
  async removeUser(@Args('id') id: string) {
    return await this.userService.remove(id)
  }

  @Subscription((returns) => User)
  userAdded() {
    return pubSub.asyncIterator('userAdded')
  }
}
