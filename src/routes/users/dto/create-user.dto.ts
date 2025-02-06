import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
  
    @IsString({ message:  `o valor não é válido para o valor esperado em CPF`})
    @IsNotEmpty({message: `o valor de CPF não pode ser vázio, tente novamente`})
    CPF: string;

    @IsString({ message:  `o valor não é válido para o valor esperado em name`})
    @IsNotEmpty({message: `o valor de name não pode ser vázio, tente novamente`})
    name: string;
    
    @IsNotEmpty({message: `o valor de password não pode ser vázio, tente novamente`})
    @IsString({ message:  `o valor não é válido para o valor esperado em password`})
    password: string;

    @IsOptional()
    @IsString({ message:  `o valor não é válido para o valor esperado em personal_email`})
    personal_email?: string;

    @IsOptional()
    @IsString({ message:  `o valor não é válido para o valor esperado em corporate_email`})
    corporate_email?: string;

    @IsOptional()
    @IsString({ message:  `o valor não é válido para o valor esperado em matrícula`})
    matriculation?: string;

    @IsOptional()
    @IsDate({ message: `o valor não é válido para o valor esperado em date_of_birth`})
    date_of_birth?: Date;

    @IsNotEmpty({message: `o valor de roleID não pode ser vázio, tente novamente`})
    @IsInt({ message:  `o valor não é válido para o valor esperado em roleID`})
    roleID: number;

    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em sexID`})
    sexID?: number;

    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em secretaryID`})
    secretaryID?: number;
    
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em sectorID`})
    sectorID?: number;
    
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em nomenclatureOfficeID`})
    nomenclatureOfficeID?: number;
   
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em leaderId`})
    leaderId?: string;
    
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em statusID`})
    statusID?: number;
}
