import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [PermissionController],
  providers: [PermissionService],
  imports: [AdminModule]
})
export class PermissionModule {}
