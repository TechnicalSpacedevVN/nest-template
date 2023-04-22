import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LoggerMiddleware } from './logger.middleware'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],

  providers: [AppService, { provide: APP_INTERCEPTOR, useClass: LoggerMiddleware }],
})
export class AppModule {}
