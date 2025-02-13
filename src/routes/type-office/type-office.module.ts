import { Module } from '@nestjs/common';
import { TypeOfficeService } from './type-office.service';
import { TypeOfficeController } from './type-office.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  imports: [PrismaModule, UtilsModule],
  controllers: [TypeOfficeController],
  providers: [TypeOfficeService],
})
export class TypeJobModule {}
