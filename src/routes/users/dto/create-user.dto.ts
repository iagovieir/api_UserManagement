import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  
    @IsString()
    @IsNotEmpty()
    CPF: string;

    @IsString()
    @IsNotEmpty()
    name: string;   
}
