import { IsNotEmpty, IsString } from "class-validator";

export class CreateTypeOfficeDto {

    @IsString()
    @IsNotEmpty()
    name: string;
}
