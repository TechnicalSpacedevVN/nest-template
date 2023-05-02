import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { AdminService } from './admin.service'
import { UserAdmin } from './entities/user.entity'
import { createUserAdminInput } from './dto/create-admin.input'
import { UpdateAdminInput } from './dto/update-admin.input'

@Resolver(() => UserAdmin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => UserAdmin)
  createUserAdmin(@Args('createUserAdminInput') createUserInput: createUserAdminInput) {
    return this.adminService.create(createUserInput)
  }

  @Query(() => [UserAdmin], { name: 'admin' })
  findAll() {
    return this.adminService.findAll()
  }

  @Query(() => UserAdmin, { name: 'admin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.findOne(id)
  }

  @Mutation(() => UserAdmin)
  updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
    return this.adminService.update(updateAdminInput.id, updateAdminInput)
  }

  @Mutation(() => UserAdmin)
  removeAdmin(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.remove(id)
  }
}
