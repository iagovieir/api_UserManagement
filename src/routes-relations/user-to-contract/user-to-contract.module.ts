import { Module } from '@nestjs/common';
import { UserToContractService } from './user-to-contract.service';
import { UserToContractController } from './user-to-contract.controller';
import { UtilsModule } from 'src/utils/utils.module';
import { PrismaModule } from 'src/databases/prisma/prisma.module';

@Module({
  controllers: [UserToContractController],
  providers: [UserToContractService],
  imports: [PrismaModule, UtilsModule]
})
export class UserToContractModule {}
