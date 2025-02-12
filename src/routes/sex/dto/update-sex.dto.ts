import { PartialType } from '@nestjs/mapped-types';
import { CreateSexDto } from './create-sex.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateSexDto extends PartialType(CreateSexDto) {

        @ApiPropertyOptional({ example: "M", description: "Sigla do gênero do usuário" })
        name: string;
}
