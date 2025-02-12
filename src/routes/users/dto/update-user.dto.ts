import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {

        @ApiPropertyOptional({ example: "12345678900", description: "CPF do usuário" })
        CPF: string;
    
        @ApiPropertyOptional({ example: "John Doe", description: "Nome completo do usuário" })
        name: string;
        
        @ApiPropertyOptional({ example: "SecureP@ss123", description: "Senha do usuário" })
        password: string;
    
        @ApiPropertyOptional({ example: "john.personal@example.com", description: "E-mail pessoal do usuário", required: false })
        personal_email?: string;
    
        @ApiPropertyOptional({ example: "john.corporate@example.com", description: "E-mail corporativo do usuário", required: false })
        corporate_email?: string;
    
        @ApiPropertyOptional({ example: "202312345", description: "Matrícula do usuário", required: false })
        matriculation?: string;
    
        @ApiPropertyOptional({ example: "10-08-2000", description: "Data de nascimento do usuário", required: false, type: String })
        date_of_birth?: Date;
    
        @ApiPropertyOptional({ example: 1, description: "ID do cargo do usuário" })
        roleID: number;
    
        @ApiPropertyOptional({ example: 3, description: "ID da secretaria do usuário", required: false })
        sexID?: number;
    
        @ApiPropertyOptional({ example: 4, description: "ID do setor do usuário", required: false })
        secretaryID?: number;
        
        @ApiPropertyOptional({ example: 5, description: "ID da nomenclatura do cargo do usuário", required: false })
        sectorID?: number;
        
        @ApiPropertyOptional({ example: 6, description: "ID do líder do usuário", required: false })
        nomenclatureOfficeID?: number;
        
        @ApiPropertyOptional({ example: "12345678900", description: "CPF(id) do líder do usuário", required: false })
        leaderId?: string;
        
        @ApiPropertyOptional({ example: 7, description: "ID do status do usuário", required: false })
        statusID?: number;
}
