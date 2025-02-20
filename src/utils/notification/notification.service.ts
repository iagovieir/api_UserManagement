import { Injectable, Logger } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { Cron } from '@nestjs/schedule';
import { ContractService } from 'src/routes/contract/contract.service';

@Injectable()
export class NotificationService {

  constructor(
    private contractsService: ContractService,
    private mailService: MailService,
  ) {}

  @Cron('0 01 10 * * *')
  async checkExpiringContracts() {
    
    console.log('🔍 Verificando contratos vencendo em 60, 45, 30 e 15 dias...');
    
    const contracts = await this.contractsService.findExpiringContracts();
    const today = new Date();

    console.log(contracts)

    if (contracts.length === 0) {
      console.log('✅ Nenhum contrato próximo do vencimento.');
      return;
    }

    for (const contract of contracts) {
      if (!contract.users || contract.users.length === 0) {
        console.log(`⚠️ Contrato ${contract.numberContract} não tem gestores associados.`);
        continue;
      }
      const endDate = new Date(contract.endDate);
      const daysRemaining = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

      console.log(daysRemaining)

      for (const user of contract.users) {
        console.log(`📧 Enviando notificação para ${user.user.corporate_email} sobre contrato ${contract.numberContract}`);
        await this.mailService.sendContractNotification(user.user.corporate_email, contract, contract.endDate.toLocaleDateString(), daysRemaining, user.user.name);
      }
    }
  }
}
