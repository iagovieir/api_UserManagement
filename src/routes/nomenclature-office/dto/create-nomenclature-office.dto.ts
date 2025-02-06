import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateNomenclatureOfficeDto {

    @IsString({ message: `o valor não é válido para o valor esperado em name`})
    @IsNotEmpty({ message: `o valor não pode ser vázio`})
    name: string;

    @IsOptional()
    @IsInt({ message: `o valor não é válido para o valor esperado em typeOffice_ID`})
    typeOffice_ID?: number;

}
