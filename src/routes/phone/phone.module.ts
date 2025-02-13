import { Module } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { PhoneController } from './phone.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';
import { UtilsModule } from 'src/utils/utils.module';


@Module({
  controllers: [PhoneController],
  providers: [PhoneService],
  imports: [PrismaModule, UtilsModule]
})
export class PhoneModule {}
