import { Module } from '@nestjs/common'
import { AuthProvider } from './auth.provider'
import { Authcontroller } from './auth.controller'

@Module({
  imports: [],
  exports: [AuthProvider],
  controllers: [Authcontroller],
  providers: [AuthProvider],
})
export class AuthModule {}
