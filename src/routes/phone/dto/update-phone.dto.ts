import { PartialType } from '@nestjs/mapped-types';
import { CreatePhoneDto } from './create-phone.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePhoneDto extends PartialType(CreatePhoneDto) {

    @ApiPropertyOptional({ example: "81999998888", description: "Sigla do gênero do usuário" })
    phone: string;

    @ApiPropertyOptional({ example: "00099988877", description: "CPF(id) do usuário relacionado ao número de celular" })
    user_Id: string;

}
