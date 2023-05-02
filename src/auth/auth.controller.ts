import { Controller, Get, Post, Req, Res } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { FastifyReply, FastifyRequest } from 'fastify'

@ApiTags('auth')
@Controller('/auth')
export class Authcontroller {
  @Post()
  postLogin(@Req() request: any, @Res({ passthrough: true }) response: FastifyReply): string {
    // response.cookie('key', 'value')
    return 'auth'
  }

  @Get()
  getUser(@Req() request: FastifyRequest) {
    // return request.cookies
  }

  // @Post('/refresh-token')
  // @Validate
  // refreshToken(){ }
}
