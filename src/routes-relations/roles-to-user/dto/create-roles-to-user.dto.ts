import { ApiProperty, ApiQuery } from "@nestjs/swagger"
import { IsEnum, IsNotEmpty, IsString } from "class-validator"

export enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
    MODERATOR = "MODERATOR",
    VIEWER = "VIEWER"
  }

export class CreateRolesToUserDto {

    @ApiProperty({ example: "12345678900", description: "CPF do usuário" })
    @IsString({ message:  `o valor não é válido para o valor esperado em CPF`})
    @IsNotEmpty({message: `o valor de CPF não pode ser vázio, tente novamente`})
    userId: string

    @ApiProperty({ enum: UserRole })
    @IsNotEmpty({message: `o valor de CPF não pode ser vázio, tente novamente`})
    @IsEnum(UserRole)
    role: UserRole
}
