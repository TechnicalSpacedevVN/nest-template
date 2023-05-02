import { Inject, Injectable } from '@nestjs/common'
// import { User } from './models/user.model'
import { PaginateArgs } from 'src/common/paginate.args'
import { CreateUserDto } from './user.controller'
import { NewUserInput } from './dto/new-user.input'
import { InjectRepository } from '@nestjs/typeorm'
import { User, UserDocument } from './user.entity'
import { MongoRepository, ObjectId } from 'typeorm'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class UserService {
  constructor(
    // @InjectRepository(User) private readonly userRepositoty: MongoRepository<User>,
    // @Inject('USER_REPOSITORY') // private readonly userRepositoty: Repository<User>,
    @InjectModel(User.name) private userRepositoty: Model<UserDocument>,
  ) {}

  async findById(id: string): Promise<User | null> {
    return this.userRepositoty.findOne({ where: { id } })
    // return users.find((e) => e.id == id)
  }
  async findAll(args: PaginateArgs = { skip: 0, limit: 15 }) {
    return this.userRepositoty.find().limit(args.limit).skip(args.skip)
  }

  async remove(id: any) {
    let result = await this.userRepositoty.deleteOne({ _id: id })
    return result.deletedCount > 0
  }

  async create(input: NewUserInput): Promise<User> {
    let user = await this.userRepositoty.create(input)
    return user
  }

  async count(): Promise<number> {
    return this.userRepositoty.count()
  }
}
