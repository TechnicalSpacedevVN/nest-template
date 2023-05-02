import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  imports: [AdminModule]
})
export class ReviewModule {}
