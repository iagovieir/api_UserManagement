import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateUserToContractDto {
    
    @ApiProperty({ example: "12345678900", description: "CPF do usuário" })
    @IsString({ message:  `o valor não é válido para o valor esperado em userID`})
    @IsNotEmpty({message: `o valor de userID não pode ser vázio, tente novamente`})
    userID: string;

    @ApiProperty({ example: "10.290/2025", description: "Número do Contrato" })
    @IsString({ message:  `o valor não é válido para o valor esperado em contractID`})
    @IsNotEmpty({message: `o valor de contractID não pode ser vázio, tente novamente`})
    contractID: string;
    
}
