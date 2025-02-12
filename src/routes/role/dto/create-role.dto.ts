import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
    
    @ApiProperty({ example: "ADMINISTRADOR", description: "Tipo de permissão do usuário" })
    @IsString({ message: `o valor não é válido para o valor esperado em name`})
    @IsNotEmpty({ message: `o valor não pode ser vázio`})
    typeRole: string;
}
