import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CookieAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.cookies.access_token;

    if (token) {
      try {
        const decodedToken = this.jwtService.verify(token);
        // Проверка актуальности токена, например, можно проверить срок истечения (exp) в декодированном токене.
        const now = Math.floor(Date.now() / 1000);
        if (decodedToken.exp && decodedToken.exp < now) {
          return false; // Токен истек, доступ запрещен.
        }
        request.currentUser = decodedToken;
        // Если токен валиден и актуален, разрешаем доступ.
        return true;
      } catch (error) {
        // Ошибка декодирования токена или другая ошибка - доступ запрещен.
        return false;
      }
    }

    // Если токен не найден, доступ запрещен.
    return false;
  }
}
