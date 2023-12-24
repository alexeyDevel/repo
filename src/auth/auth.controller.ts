import {
  Controller,
  Post,
  UseGuards,
  Get,
  Body,
  Res,
  Req,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { CookieAuthGuard } from './guards/cookie-auth.guard';
import { CookieStrategy } from './strategys/cookie.strategy';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { AuthLoginDto } from './dto/AuthLogin.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'sign in' })
  @ApiBody({ type: AuthLoginDto })
  @UseGuards(CookieStrategy)
  @Post('login')
  async login(
    @Req() req: Request,
    @Body() passport: IAuthLogin,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { access_token } = await this.authService.login(passport, response);
    response
      .cookie('access_token', access_token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        expires: new Date(Date.now() + 1 * 24 * 60 * 1000),
      })
      .send({ status: 'ok' });
  }

  @UseGuards(CookieAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    const currentUser = req.currentUser;
    return { txt: 'This is secure data.', currentUser };
  }
}
