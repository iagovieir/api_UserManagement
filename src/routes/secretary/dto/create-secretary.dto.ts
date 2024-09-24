import { IsNotEmpty, IsString } from "class-validator";

export class CreateSecretaryDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;
}
