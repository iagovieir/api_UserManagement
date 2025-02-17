import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateContractDto } from './create-contract.dto';

export class UpdateContractDto extends PartialType(CreateContractDto) {

        @ApiProperty({ example: "10.290/2025", description: "Número do Contrato" })
        numberContract: string;

        @ApiProperty({ example: "Compaz Ibura", description: "Título do Contrato" })
        titulo: string;
    
        @ApiProperty({ example: "Execução de uma obra...", description: "Objeto do contrato" })
        nameObjetc: string;
    
        @ApiProperty({ example: "2025-05-29", description: "data inicio da vigência" })
        startDate:  Date;
    
        @ApiProperty({ example: "2025-05-29", description: "Data final da vigência" })
        endDate:   Date;

}
