import { Controller, Post } from '@nestjs/common'

@Controller()
export class Authcontroller {
  @Post()
  postLogin(): string {
    return 'auth'
  }
}
