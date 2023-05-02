import { Module } from '@nestjs/common'
import { HealthController } from './health.controller'
import { TerminusModule } from '@nestjs/terminus'
import { HttpModule } from '@nestjs/axios'
import { UserHealthIndicator } from 'src/user/user.health'
import { TerminusLogger } from './terminus-logger.service'
import { DatabaseModule } from 'src/database.module'

@Module({
  imports: [
    HttpModule,
    TerminusModule.forRoot({
      errorLogStyle: 'pretty',
      logger: TerminusLogger,
    }),
  ],
  controllers: [HealthController],
  providers: [UserHealthIndicator],
})
export class HealthModule {}
