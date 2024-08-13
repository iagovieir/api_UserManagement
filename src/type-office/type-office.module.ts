import { Module } from '@nestjs/common';
import { TypeOfficeService } from './type-office.service';
import { TypeOfficeController } from './type-office.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TypeOfficeController],
  providers: [TypeOfficeService],
})
export class TypeJobModule {}
