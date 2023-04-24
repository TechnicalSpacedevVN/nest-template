import { Controller, Get, Post, Req, Res } from '@nestjs/common'
import { FastifyReply, FastifyRequest } from 'fastify'

@Controller('/auth')
export class Authcontroller {
  @Post()
  postLogin(@Req() request: any, @Res({ passthrough: true }) response: FastifyReply): string {
    response.cookie('key', 'value')
    return 'auth'
  }

  @Get()
  getUser(@Req() request: FastifyRequest) {
    console.log(request.cookies)
    return request.cookies
  }
}
