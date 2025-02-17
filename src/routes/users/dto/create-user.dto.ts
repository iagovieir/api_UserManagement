import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDate, IsInt, IsISO8601, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    
    @ApiProperty({ example: "12345678900", description: "CPF do usuário" })
    @IsString({ message:  `o valor não é válido para o valor esperado em CPF`})
    @IsNotEmpty({message: `o valor de CPF não pode ser vázio, tente novamente`})
    CPF: string;

    @ApiProperty({ example: "John Doe", description: "Nome completo do usuário" })
    @IsString({ message:  `o valor não é válido para o valor esperado em name`})
    @IsNotEmpty({message: `o valor de name não pode ser vázio, tente novamente`})
    name: string;
    
    @ApiProperty({ example: "SecureP@ss123", description: "Senha do usuário" })
    @IsNotEmpty({message: `o valor de password não pode ser vázio, tente novamente`})
    @IsString({ message:  `o valor não é válido para o valor esperado em password`})
    password: string;

    @ApiProperty()
    @ApiProperty({ example: "john.personal@example.com", description: "E-mail pessoal do usuário", required: false })
    @IsOptional()
    @IsString({ message:  `o valor não é válido para o valor esperado em personal_email`})
    personal_email?: string;

    @ApiProperty({ example: "john.corporate@example.com", description: "E-mail corporativo do usuário", required: false })
    @IsOptional()
    @IsString({ message:  `o valor não é válido para o valor esperado em corporate_email`})
    corporate_email?: string;

    @ApiProperty({ example: "202312345", description: "Matrícula do usuário", required: false })
    @IsOptional()
    @IsString({ message:  `o valor não é válido para o valor esperado em matrícula`})
    matriculation?: string;

    @ApiProperty({ example: "10-08-2000", description: "Data de nascimento do usuário", required: false, type: String })
    @IsOptional()
    @IsISO8601({})
    date_of_birth?: Date;

    @ApiProperty({ example: 1, description: "ID do cargo do usuário" })
    @IsNotEmpty({message: `o valor de roleID não pode ser vázio, tente novamente`})
    @IsInt({ message:  `o valor não é válido para o valor esperado em roleID`})
    roleID: number;

    @ApiProperty({ example: 3, description: "ID da secretaria do usuário", required: false })
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em sexID`})
    sexID?: number;

    @ApiProperty({ example: 4, description: "ID do setor do usuário", required: false })
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em secretaryID`})
    secretaryID?: number;
    
    @ApiProperty({ example: 5, description: "ID da nomenclatura do cargo do usuário", required: false })
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em sectorID`})
    sectorID?: number;
    
    @ApiProperty({ example: 6, description: "ID do líder do usuário", required: false })
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em nomenclatureOfficeID`})
    nomenclatureOfficeID?: number;
    
    @ApiProperty({ example: "12345678900", description: "CPF(id) do líder do usuário", required: false })
    @IsOptional()
    @IsString({ message:  `o valor não é válido para o valor esperado em leaderId`})
    leaderId?: string;
    
    @ApiProperty({ example: 7, description: "ID do status do usuário", required: false })
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em statusID`})
    statusID?: number;
}
