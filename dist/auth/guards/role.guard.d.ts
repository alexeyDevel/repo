import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class RoleGuard implements CanActivate {
    private reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
}
import { $Enums } from '@prisma/client';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: $Enums.Role[]) => import("@nestjs/common").CustomDecorator<string>;
export declare const AllowAnonymous: () => import("@nestjs/common").CustomDecorator<string>;
