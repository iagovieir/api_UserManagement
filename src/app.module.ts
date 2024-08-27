import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NomenclaturesOfficeModule } from './nomenclature-office/nomenclatures-office.module';
import { TypeJobModule } from './type-office/type-office.module';
import { PhoneModule } from './phone/phone.module';
import { SecretaryModule } from './secretary/secretary.module';
import { SectorModule } from './sector/sector.module';
import { SexModule } from './sex/sex.module';
import { StatusModule } from './status/status.module';

@Module({
  
  imports: [UsersModule, NomenclaturesOfficeModule, 
            TypeJobModule, PhoneModule, 
            SecretaryModule, SectorModule, 
            SexModule, StatusModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
