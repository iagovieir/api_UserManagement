import { Module } from '@nestjs/common';
import { SecretaryService } from './secretary.service';
import { SecretaryController } from './secretary.controller';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { PrismaModule } from 'src/databases/prisma/prisma.module';


@Module({
  controllers: [SecretaryController],
  providers: [SecretaryService],
  imports: [PrismaModule]
})
export class SecretaryModule {}
