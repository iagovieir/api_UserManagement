import { Module } from '@nestjs/common';
import { RolesToUserService } from './roles-to-user.service';
import { RolesToUserController } from './roles-to-user.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RolesToUserController],
  providers: [RolesToUserService],
})
export class RolesToUserModule {}
