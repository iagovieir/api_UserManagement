import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  
    @IsString()
    @IsNotEmpty()
    CPF: string;

    @IsString()
    @IsNotEmpty()
    name: string;   

    @IsString()
    @IsNotEmpty()
    personal_email: string;

    @IsString()
    @IsNotEmpty()
    corporate_email: string;

    @IsString()
    @IsNotEmpty()
    matriculation: string;
}
