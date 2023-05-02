import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import {
  DiskHealthIndicator,
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
  MongooseHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus'
import { UserHealthIndicator } from 'src/user/user.health'

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: MongooseHealthIndicator,
    private readonly disk: DiskHealthIndicator,
    private memory: MemoryHealthIndicator,
    private user: UserHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.db.pingCheck('database', { timeout: 5000 }), // Check kết nối database
      () => this.disk.checkStorage('storage', { path: '/', threshold: 250 * 1024 * 1024 * 1024 }), // check ổ cứng lưu trữ
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024), // check memmory
      () => this.user.isHealthy('user'),
    ])
  }
}
