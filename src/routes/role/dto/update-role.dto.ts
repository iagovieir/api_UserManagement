import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {

    @ApiPropertyOptional({ example: "ADMINISTRADOR", description: "Tipo de permissão do usuário" })
    typeRole: string;
}
