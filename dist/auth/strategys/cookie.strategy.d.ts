import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Request } from 'express';
declare const CookieStrategy_base: new (...args: any[]) => Strategy;
export declare class CookieStrategy extends CookieStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string, req: Request): Promise<any>;
    authenticate(req: Request, options?: any): any;
}
export {};
