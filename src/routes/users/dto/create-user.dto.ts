import { IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  
    @IsString({ message:  `o valor não é válido para o valor esperado em CPF`})
    @IsNotEmpty({message: `o valor de CPF não pode ser vázio, tente novamente`})
    CPF: string;

    @IsString({ message:  `o valor não é válido para o valor esperado em name`})
    @IsNotEmpty({message: `o valor de name não pode ser vázio, tente novamente`})
    name: string;   

    @IsString({ message:  `o valor não é válido para o valor esperado em email`})
    personal_email?: string;

    @IsString({ message:  `o valor não é válido para o valor esperado em email`})
    corporate_email?: string;

    @IsString({ message:  `o valor não é válido para o valor esperado em matrícula`})
    matriculation?: string;

    @IsDate({ message: `o valor não é válido para o valor esperado em date`})
    date_of_birth?: Date;

    @IsInt({ message:  `o valor não é válido para o valor esperado em sex`})
    sexID?: number;

    @IsInt({ message:  `o valor não é válido para o valor esperado em secretary`})
    secretaryID?: number;
    
    @IsInt({ message:  `o valor não é válido para o valor esperado em sector`})
    sectorID?: number;
    
    @IsInt({ message:  `o valor não é válido para o valor esperado em nomenclature`})
    nomenclatureOfficeID?: number;
   
    @IsInt({ message:  `o valor não é válido para o valor esperado em leader`})
    leaderId?: string;
    
    @IsInt({ message:  `o valor não é válido para o valor esperado em status`})
    statusID?: number;
}
