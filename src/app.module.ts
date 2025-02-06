import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './routes/users/users.module';
import { NomenclaturesOfficeModule } from './routes/nomenclature-office/nomenclatures-office.module';
import { TypeJobModule } from './routes/type-office/type-office.module';
import { PhoneModule } from './routes/phone/phone.module';
import { SecretaryModule } from './routes/secretary/secretary.module';
import { SectorModule } from './routes/sector/sector.module';
import { SexModule } from './routes/sex/sex.module';
import { StatusModule } from './routes/status/status.module';
import { RoleModule } from './routes/role/role.module';

@Module({
  
  imports: [UsersModule, NomenclaturesOfficeModule, 
            TypeJobModule, PhoneModule, 
            SecretaryModule, SectorModule, 
            SexModule, StatusModule, RoleModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
