import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { AdminService } from './admin.service'
import { PromotionAdmin } from './entities/admin.entity'
import { CreateAdminInput } from './dto/create-admin.input'
import { UpdateAdminInput } from './dto/update-admin.input'

@Resolver(() => PromotionAdmin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => PromotionAdmin)
  createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
    return this.adminService.create(createAdminInput)
  }

  @Query(() => [PromotionAdmin], { name: 'admin' })
  findAll() {
    return this.adminService.findAll()
  }

  @Query(() => PromotionAdmin, { name: 'admin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.findOne(id)
  }

  @Mutation(() => PromotionAdmin)
  updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
    return this.adminService.update(updateAdminInput.id, updateAdminInput)
  }

  @Mutation(() => PromotionAdmin)
  removeAdmin(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.remove(id)
  }
}
