import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateStatusDto {

        @ApiProperty({ example: "ATIVO", description: "Nome do Status do usuário" })
        @IsString({ message: `o valor não é válido para o valor esperado em name`})
        @IsNotEmpty({ message: `o valor não pode ser vázio`})
        name: string;

}
