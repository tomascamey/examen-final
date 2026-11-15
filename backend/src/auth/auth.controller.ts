import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: any) {
    if (body.email === 'admin@admin.com' && body.password === '123456') {
      return { token: 'fake-jwt-token', user: body.email };
    }
    throw new UnauthorizedException('Credenciales inválidas');
  }
}