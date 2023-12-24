import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const { currentUser } = context.switchToHttp().getRequest();
    const hasRole = () => currentUser.roles.some((role) => roles.includes(role));
    console.log('roles', roles, hasRole())
    if (currentUser && currentUser.roles && hasRole()) {
      return true;
    }
    console.log('currentUser', currentUser)
    throw new ForbiddenException('You do not have sufficient permissions');
  }
}

import { SetMetadata } from '@nestjs/common';
import { $Enums, Prisma } from '@prisma/client';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: $Enums.Role[]) => SetMetadata(ROLES_KEY, roles);
export const AllowAnonymous = () => SetMetadata('allow-anonymous', true);
