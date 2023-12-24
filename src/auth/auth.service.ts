import { Injectable, Response, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { comparePassword } from './utils/auth.bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);
    const isComparePassword = comparePassword(pass, user.passwordhash);
    if (user && isComparePassword) {
      const { passwordhash, ...result } = user;
      return result;
    }
    return null;
  }
  async login(passportData: IAuthLogin, res: any): Promise<TLoginResult> {
    const user = await this.prisma.user.findFirst({
      where: { email: passportData.email },
    });
    const payload = { email: user.email, sub: user.id, roles: user.roles };
    const accessToken = this.jwtService.sign(payload);
    return {
      access_token: accessToken,
      user: user,
    };
  }
}
