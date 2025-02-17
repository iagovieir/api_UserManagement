import { Module } from '@nestjs/common';
import { SexService } from './sex.service';
import { SexController } from './sex.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  imports: [PrismaModule, UtilsModule],
  controllers: [SexController],
  providers: [SexService],
})
export class SexModule {}
