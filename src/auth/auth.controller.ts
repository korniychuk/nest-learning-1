import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SafeUser } from '../users/user';
import { AuthService } from './services/auth.service';

@Controller('auth')
export class AuthController {

  public constructor(
    private readonly $auth: AuthService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public login(@Request() req) {
    const user: SafeUser = req.user;
    return this.$auth.login(user);
  }

  @UseGuards(AuthGuard())
  @Get('me')
  public getProfile(@Request() req): SafeUser {
    return req.user;
  }

}
