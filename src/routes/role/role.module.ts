import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [PrismaModule, UtilsModule]
})
export class RoleModule {}
