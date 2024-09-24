import { Module } from '@nestjs/common';
import { NomenclaturesOfficeService } from './nomenclatures-office.service';
import { NomenclaturesOfficeController } from './nomenclatures-office.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NomenclaturesOfficeController],
  providers: [NomenclaturesOfficeService],
})
export class NomenclaturesOfficeModule {}
