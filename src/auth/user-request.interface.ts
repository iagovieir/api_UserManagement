import { Request } from 'express';
import { UserRole } from 'src/routes-relations/roles-to-user/dto/create-roles-to-user.dto';

export interface AuthenticatedRequest extends Request {
  user?: {
    CPF: string;
    corporate_email: string;
    roles: { role: UserRole }[];
  };
}
