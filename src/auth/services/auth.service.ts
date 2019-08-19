import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../../users/users.service';
import { SafeUser } from '../../users/user';

@Injectable()
export class AuthService {

  public constructor(
    private readonly $users: UsersService,
    private readonly $jwt: JwtService,
  ) {}

  public async validateUser(username: string, password: string): Promise<SafeUser | undefined> {
    const user = await this.$users.findOne(username);
    if (user && user.password === password) {
      const { password: removed, ...result } = user;
      return result;
    }
  }

  public login(user: SafeUser) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.$jwt.sign(payload),
    };
  }

}
