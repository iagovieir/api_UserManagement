import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeOfficeDto } from './create-type-office.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTypeOfficeDto extends PartialType(CreateTypeOfficeDto) {

        @ApiPropertyOptional({ example: "COMISSIOANDO", description: "Nome do tipo do cargo do usuário" })
        name: string;
}
