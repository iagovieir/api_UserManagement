import { IsNotEmpty, IsString } from "class-validator";

export class CreateNomenclatureOfficeDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    //TypeOffice: nenhum ou apenas um id do tipo de trabalho

    //users: nenhum ou varios id's dos usuários
}
