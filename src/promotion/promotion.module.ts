import { Module } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { PromotionController } from './promotion.controller';
import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [PromotionController],
  providers: [PromotionService],
  imports: [AdminModule]
})
export class PromotionModule {}
