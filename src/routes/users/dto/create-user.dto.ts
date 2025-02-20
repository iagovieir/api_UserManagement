import { ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import { IsInt, IsISO8601, IsNotEmpty, IsOptional, IsString } from "class-validator";

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

    @ApiPropertyOptional({ example: "john.personal@example.com", description: "E-mail pessoal do usuário", required: false })
    @IsOptional()
    @IsString({ message:  `o valor não é válido para o valor esperado em personal_email`})
    personal_email?: string;

    @ApiPropertyOptional({ example: "john.corporate@example.com", description: "E-mail corporativo do usuário", required: false })
    @IsOptional()
    @IsString({ message:  `o valor não é válido para o valor esperado em corporate_email`})
    corporate_email?: string;

    @ApiPropertyOptional({ example: "202312345", description: "Matrícula do usuário", required: false })
    @IsOptional()
    @IsString({ message:  `o valor não é válido para o valor esperado em matrícula`})
    matriculation?: string;

    @ApiPropertyOptional({ example: "10-08-2000", description: "Data de nascimento do usuário", required: false, type: String })
    @IsOptional()
    @IsISO8601({})
    date_of_birth?: Date;

    @ApiPropertyOptional({ example: 3, description: "ID da secretaria do usuário", required: false })
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em sexID`})
    sexID?: number;

    @ApiPropertyOptional({ example: 4, description: "ID do setor do usuário", required: false })
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em secretaryID`})
    secretaryID?: number;
    
    @ApiPropertyOptional({ example: 5, description: "ID da nomenclatura do cargo do usuário", required: false })
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em sectorID`})
    sectorID?: number;
    
    @ApiPropertyOptional({ example: 6, description: "ID do líder do usuário", required: false })
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em nomenclatureOfficeID`})
    nomenclatureOfficeID?: number;
    
    @ApiPropertyOptional({ example: "12345678900", description: "CPF(id) do líder do usuário", required: false })
    @IsOptional()
    @IsString({ message:  `o valor não é válido para o valor esperado em leaderId`})
    leaderId?: string;
    
    @ApiPropertyOptional({ example: 7, description: "ID do status do usuário", required: false })
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em statusID`})
    statusID?: number;
}
