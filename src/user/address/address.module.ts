import { Module } from '@nestjs/common'
import { AddressService } from './address.service'
import { AddressController } from './address.controller'
import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [AddressController],
  providers: [AddressService],
  imports: [AdminModule],
})
export class AddressModule {}
