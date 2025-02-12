import { PartialType } from '@nestjs/mapped-types';
import { CreateNomenclatureOfficeDto } from './create-nomenclature-office.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateNomenclatureOfficeDto extends PartialType(CreateNomenclatureOfficeDto) {

    @ApiPropertyOptional({ example: "ASSESSOR ADMINISTRATIVO", description: "Nome do Cargo do usuário" })
    name: string;

    @ApiPropertyOptional({ example: 1, description: "ID do tipo de cargo do usuário" })
    typeOffice_ID?: number;
}
