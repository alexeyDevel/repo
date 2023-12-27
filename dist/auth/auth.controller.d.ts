import { Response, Request } from 'express';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: Request, passport: IAuthLogin, response: Response): Promise<void>;
    getProfile(req: Request): {
        txt: string;
        currentUser: ICurrentUserData;
    };
}
