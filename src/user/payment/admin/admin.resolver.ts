import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { AdminService } from './admin.service'
import { UserPaymentAdmin } from './entities/admin.entity'
import { CreateAdminInput } from './dto/create-admin.input'
import { UpdateAdminInput } from './dto/update-admin.input'

@Resolver(() => UserPaymentAdmin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => UserPaymentAdmin)
  createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
    return this.adminService.create(createAdminInput)
  }

  @Query(() => [UserPaymentAdmin], { name: 'admin' })
  findAll() {
    return this.adminService.findAll()
  }

  @Query(() => UserPaymentAdmin, { name: 'admin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.findOne(id)
  }

  @Mutation(() => UserPaymentAdmin)
  updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
    return this.adminService.update(updateAdminInput.id, updateAdminInput)
  }

  @Mutation(() => UserPaymentAdmin)
  removeAdmin(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.remove(id)
  }
}
