import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [AdminModule]
})
export class ProductModule {}
