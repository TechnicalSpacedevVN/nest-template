import { Module } from '@nestjs/common'
import { PaymentService } from './payment.service'
import { PaymentController } from './payment.controller'
import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService],
  imports: [AdminModule],
})
export class PaymentModule {}
