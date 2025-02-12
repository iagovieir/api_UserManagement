import { PartialType } from '@nestjs/mapped-types';
import { CreateSectorDto } from './create-sector.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateSectorDto extends PartialType(CreateSectorDto) {
     
    @ApiPropertyOptional({ example: "Setor de Engenharia", description: "Setor do usuário" })
    name: string;
}
