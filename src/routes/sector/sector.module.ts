import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorController } from './sector.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  imports: [PrismaModule, UtilsModule],
  controllers: [SectorController],
  providers: [SectorService],
})
export class SectorModule {}
