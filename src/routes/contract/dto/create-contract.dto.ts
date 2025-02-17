import { ApiProperty } from "@nestjs/swagger"
import { IsISO8601, IsNotEmpty, IsString } from "class-validator"

export class CreateContractDto {

    @ApiProperty({ example: "10.290/2025", description: "Número do Contrato" })
    @IsString({ message: `o valor não é válido para o valor esperado em numberContract`})
    @IsNotEmpty({ message: `o valor não pode ser vázio`})
    numberContract: string;

    @ApiProperty({ example: "Compaz Ibura", description: "Título do Contrato" })
    @IsString({ message: `o valor não é válido para o valor esperado em titulo`})
    @IsNotEmpty({ message: `o valor não pode ser vázio`})
    titulo: string;

    @ApiProperty({ example: "Execução de uma obra...", description: "Objeto do contrato" })
    @IsString({ message: `o valor não é válido para o valor esperado em nameObject`})
    @IsNotEmpty({ message: `o valor não pode ser vázio`})
    nameObjetc: string;

    @ApiProperty({ example: "2025-02-11T00:00:00", description: "data inicio da vigência" })
    @IsISO8601({ })
    @IsNotEmpty({ message: `o valor não pode ser vázio`})
    startDate:  Date;

    @ApiProperty({ example: "2025-02-11T00:00:00", description: "Data final da vigência" })
    @IsISO8601({})
    @IsNotEmpty({ message: `o valor não pode ser vázio`})
    endDate:   Date;

}
