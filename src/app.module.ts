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
import { UtilsModule } from './utils/utils.module';
import { ContractModule } from './routes/contract/contract.module';
import { UserToContractModule } from './routes-relations/user-to-contract/user-to-contract.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './utils/mail/mail.service';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationService } from './utils/notification/notification.service';

@Module({
  
  imports: [MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, 
      auth: {
        user: 'iago.unijp@gmail.com',
        pass: 'rvnb ogmg zayn fpbw',
      },
    },
    defaults: {
      from: '"Notificação de Contratos" <noreply@seusistema.com>',
    },
    template: {
      dir: './src/templates',
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  }), ScheduleModule.forRoot(), UsersModule, NomenclaturesOfficeModule, 
            TypeJobModule, PhoneModule, 
            SecretaryModule, SectorModule, 
            SexModule, StatusModule, RoleModule, 
            ContractModule, UtilsModule, UserToContractModule],

  controllers: [AppController],
  providers: [AppService, MailService, NotificationService],
  exports: [MailService, NotificationService]
  })
export class AppModule {}
