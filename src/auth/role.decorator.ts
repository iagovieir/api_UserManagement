import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/routes-relations/roles-to-user/dto/create-roles-to-user.dto';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
