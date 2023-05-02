import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { AdminService } from './admin.service'
import { ReviewAdmin } from './entities/admin.entity'
import { CreateAdminInput } from './dto/create-admin.input'
import { UpdateAdminInput } from './dto/update-admin.input'

@Resolver(() => ReviewAdmin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => ReviewAdmin)
  createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
    return this.adminService.create(createAdminInput)
  }

  @Query(() => [ReviewAdmin], { name: 'admin' })
  findAll() {
    return this.adminService.findAll()
  }

  @Query(() => ReviewAdmin, { name: 'admin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.findOne(id)
  }

  @Mutation(() => ReviewAdmin)
  updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
    return this.adminService.update(updateAdminInput.id, updateAdminInput)
  }

  @Mutation(() => ReviewAdmin)
  removeAdmin(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.remove(id)
  }
}
