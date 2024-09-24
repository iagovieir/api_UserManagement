import { IsNotEmpty, IsString } from "class-validator";

export class CreatePhoneDto {

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    user_Id: string;

}
