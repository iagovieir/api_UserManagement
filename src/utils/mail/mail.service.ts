import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendContractNotification(emails: string, contract: any, endDate: string, daysRemaining: number, user: string) {
    
    await this.mailerService.sendMail({
      to: emails,
      subject: `⚠️ Seu contrato ${contract.numberContract} está vencendo!`,
      template: 'contract-warning',
      context: {
        contrato: contract.numberContract,
        vencimento: endDate,
        fiscal: user,
        diasRestantes: daysRemaining
      },
    });
  }
}
