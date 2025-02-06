import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
    
    @IsString({ message: `o valor não é válido para o valor esperado em name`})
    @IsNotEmpty({ message: `o valor não pode ser vázio`})
    typeRole: string;
}
