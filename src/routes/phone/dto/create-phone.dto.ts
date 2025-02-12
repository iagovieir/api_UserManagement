import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePhoneDto {

    @ApiProperty({ example: "81999998888", description: "Sigla do gênero do usuário" })
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({ example: "00099988877", description: "CPF(id) do usuário relacionado ao número de celular" })
    @IsString()
    @IsNotEmpty()
    user_Id: string;

}
