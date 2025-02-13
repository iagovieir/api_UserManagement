import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorController } from './sector.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  controllers: [SectorController],
  providers: [SectorService],
  imports: [PrismaModule, UtilsModule]
})
export class SectorModule {}
