import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { AdminService } from './admin.service'
import { UserPermissionAdmin } from './entities/admin.entity'
import { CreateAdminInput } from './dto/create-admin.input'
import { UpdateAdminInput } from './dto/update-admin.input'

@Resolver(() => UserPermissionAdmin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => UserPermissionAdmin)
  createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
    return this.adminService.create(createAdminInput)
  }

  @Query(() => [UserPermissionAdmin], { name: 'admin' })
  findAll() {
    return this.adminService.findAll()
  }

  @Query(() => UserPermissionAdmin, { name: 'admin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.findOne(id)
  }

  @Mutation(() => UserPermissionAdmin)
  updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
    return this.adminService.update(updateAdminInput.id, updateAdminInput)
  }

  @Mutation(() => UserPermissionAdmin)
  removeAdmin(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.remove(id)
  }
}
