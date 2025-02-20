import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsISO8601, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class LoginDto {
    
    @ApiProperty({ example: "12345678900", description: "CPF do usuário" })
    @IsString({ message:  `o valor não é válido para o valor esperado em CPF`})
    @IsNotEmpty({message: `o valor de CPF não pode ser vázio, tente novamente`})
    CPF: string;
    
    @ApiProperty({ example: "SecureP@ss123", description: "Senha do usuário" })
    @IsNotEmpty({message: `o valor de password não pode ser vázio, tente novamente`})
    @IsString({ message:  `o valor não é válido para o valor esperado em password`})
    password: string;
}
