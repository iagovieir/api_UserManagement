import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  controllers: [StatusController],
  providers: [StatusService],
  imports: [PrismaModule, UtilsModule]
})
export class StatusModule {}
