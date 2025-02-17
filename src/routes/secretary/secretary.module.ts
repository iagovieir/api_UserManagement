import { Module } from '@nestjs/common';
import { SecretaryService } from './secretary.service';
import { SecretaryController } from './secretary.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';
import { UtilsModule } from 'src/utils/utils.module';


@Module({
  imports: [PrismaModule, UtilsModule],
  controllers: [SecretaryController],
  providers: [SecretaryService],
})
export class SecretaryModule {}
