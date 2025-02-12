import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusDto } from './create-status.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateStatusDto extends PartialType(CreateStatusDto) {

            @ApiPropertyOptional({ example: "ATIVO", description: "Nome do Status do usuário" })
            name: string;
}
