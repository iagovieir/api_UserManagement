import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserToContractDto } from './create-user-to-contract.dto';

export class UpdateUserToContractDto extends PartialType(CreateUserToContractDto) {

    @ApiProperty({ example: "12345678900", description: "CPF do usuário" })
    userID: string;

    @ApiProperty({ example: "10.290/2025", description: "Número do Contrato" })
    contractID: string;
}
