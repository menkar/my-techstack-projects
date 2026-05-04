
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from 'src/user/user.types';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
    ]);
    console.log("Required roles for this route:", requiredRoles);
    if (!requiredRoles) {
        return true;
    }
    const { user } = context.switchToHttp().getRequest();
    console.log("User role:", user.role);
    return requiredRoles.includes(user.role);
  }
}
