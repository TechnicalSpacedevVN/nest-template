import { Body, Controller, Get, Patch, Post, Query, Version } from '@nestjs/common'
import { ApiHeader, ApiProperty, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'
export enum UserRole {
  Admin = 'Admin',
  Moderator = 'Moderator',
  User = 'User',
}

export class CreateUserDto {
  @IsEmail({}, { message: 'Vui lòng nhập đúng địa chỉ email' })
  @ApiProperty()
  email: string

  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  @ApiProperty({
    description: 'Mật khẩu 6-12 ký tự',
  })
  password: string

  @ApiProperty({ enum: UserRole })
  role: UserRole
}

@ApiTags('user')
@ApiHeader({
  name: 'X-MyHeader',
  description: 'Custom header',
})
@Controller({
  version: '1',
})
export class UserController {
  @Get()
  @ApiQuery({ name: 'role', enum: UserRole })
  getUser(@Query('role') role: UserRole = UserRole.User) {
    return 'user'
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  @Patch()
  patchUpdateInfo() {}

  @Version('1')
  @Post('/register')
  register() {}

  @Version('2')
  @Post('/register')
  registerV2() {}

  @Post('/resend-email')
  resendEmailRegister() {}

  @Post('/reset-password')
  resetPassword() {}

  @Post('/change-password-by-code')
  changePasswordByCode() {}

  @Post('/change-password')
  changePassword() {}
}
