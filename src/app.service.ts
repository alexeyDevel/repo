import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      name: 'Vercel deoploy',
      message: 'Готово',
    };
  }
}
