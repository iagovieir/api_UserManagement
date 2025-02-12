import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSecretaryDto {
    
    @ApiProperty({ example: "SECRETÁRIA EXECUTIA AD FIN", description: "Setor no qual o usuário está ligado" })
    @IsString({ message: `o valor não é válido para o valor esperado em name`})
    @IsNotEmpty({ message: `o valor não pode ser vázio`})
    name: string;
}
