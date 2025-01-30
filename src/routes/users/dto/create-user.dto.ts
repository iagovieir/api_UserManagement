import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
  
    @IsString({ message:  `o valor não é válido para o valor esperado em CPF`})
    @IsNotEmpty({message: `o valor de CPF não pode ser vázio, tente novamente`})
    CPF: string;

    @IsString({ message:  `o valor não é válido para o valor esperado em name`})
    @IsNotEmpty({message: `o valor de name não pode ser vázio, tente novamente`})
    name: string;   

    @IsOptional()
    @IsString({ message:  `o valor não é válido para o valor esperado em email`})
    personal_email?: string;

    @IsOptional()
    @IsString({ message:  `o valor não é válido para o valor esperado em email`})
    corporate_email?: string;

    @IsOptional()
    @IsString({ message:  `o valor não é válido para o valor esperado em matrícula`})
    matriculation?: string;

    @IsOptional()
    @IsDate({ message: `o valor não é válido para o valor esperado em date`})
    date_of_birth?: Date;

    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em sex`})
    sexID?: number;

    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em secretary`})
    secretaryID?: number;
    
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em sector`})
    sectorID?: number;
    
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em nomenclature`})
    nomenclatureOfficeID?: number;
   
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em leader`})
    leaderId?: string;
    
    @IsOptional()
    @IsInt({ message:  `o valor não é válido para o valor esperado em status`})
    statusID?: number;
}
