import { PartialType } from '@nestjs/mapped-types';
import { CreateSecretaryDto } from './create-secretary.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateSecretaryDto extends PartialType(CreateSecretaryDto) {
    
    @ApiPropertyOptional({ example: "SECRETÁRIA EXECUTIA AD FIN", description: "Setor no qual o usuário está ligado" })    
    name: string;
}
