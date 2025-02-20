import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateRolesToUserDto, UserRole } from './create-roles-to-user.dto';

export class UpdateRolesToUserDto extends PartialType(CreateRolesToUserDto) {

    @ApiPropertyOptional({ example: "12345678900", description: "CPF do usuário" })
    userId: string

    @ApiPropertyOptional({ enum: UserRole})
    role: UserRole

}
