import { Module } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { PhoneController } from './phone.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';


@Module({
  controllers: [PhoneController],
  providers: [PhoneService],
  imports: [PrismaModule]
})
export class PhoneModule {}
