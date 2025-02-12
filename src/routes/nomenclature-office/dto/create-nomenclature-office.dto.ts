import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateNomenclatureOfficeDto {

    @ApiProperty({ example: "ASSESSOR ADMINISTRATIVO", description: "Nome do Cargo do usuário" })
    @IsString({ message: `o valor não é válido para o valor esperado em name`})
    @IsNotEmpty({ message: `o valor não pode ser vázio`})
    name: string;

    @ApiPropertyOptional({ example: 1, description: "ID do tipo de cargo do usuário" })
    @IsOptional()
    @IsInt({ message: `o valor não é válido para o valor esperado em typeOffice_ID`})
    typeOffice_ID?: number;

}
