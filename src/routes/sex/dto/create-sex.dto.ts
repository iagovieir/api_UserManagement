import { IsNotEmpty, IsString } from "class-validator";

export class CreateSexDto {

    @IsString()
    @IsNotEmpty()
    name: string;

}
