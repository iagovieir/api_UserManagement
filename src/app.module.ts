import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NomenclaturesOfficeModule } from './nomenclature-office/nomenclatures-office.module';
import { TypeJobModule } from './type-office/type-office.module';

@Module({
  imports: [UsersModule, NomenclaturesOfficeModule, TypeJobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
