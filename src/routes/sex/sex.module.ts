import { Module } from '@nestjs/common';
import { SexService } from './sex.service';
import { SexController } from './sex.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';

@Module({
  controllers: [SexController],
  providers: [SexService],
  imports: [PrismaModule]
})
export class SexModule {}
