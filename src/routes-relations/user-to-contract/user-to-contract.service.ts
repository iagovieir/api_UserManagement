import { Injectable } from '@nestjs/common';
import { CreateUserToContractDto } from './dto/create-user-to-contract.dto';
import { UpdateUserToContractDto } from './dto/update-user-to-contract.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { UtilsService } from 'src/utils/utils.service';
import { NotFoundError } from 'src/error';

@Injectable()
export class UserToContractService {

  constructor(private prismaService: PrismaService, private utilsService: UtilsService){}

  async create(createUserToContractDto: CreateUserToContractDto) {
    
    await this.utilsService.validateForeignKeys<CreateUserToContractDto>(createUserToContractDto, [
      { key: 'userID', model: 'users', referencialField: 'CPF', message: 'O CPF informado não existe.' },
      { key: 'contractID', model: 'contracts', referencialField: 'numberContract', message: 'O número de contrato informado não existe.' },
    ]);
    
    return await this.prismaService.userContratc.create({
      data: createUserToContractDto
    });
  }

  findAll() {
    return this.prismaService.userContratc.findMany();
  }

  async update(userID: string, contractID: string, updateUserToContractDto: UpdateUserToContractDto) {
    try{

      await this.utilsService.validateForeignKeys<UpdateUserToContractDto>(updateUserToContractDto, [
        { key: 'userID', model: 'users', referencialField: 'CPF', message: 'O CPF informado não existe.' },
        { key: 'contractID', model: 'contracts', referencialField: 'numberContract', message: 'O número de contrato informado não existe.' },
      ]);

      return await this.prismaService.userContratc.update({
        where: {userID_contractID: {userID, contractID}},
        data: updateUserToContractDto
      });
    }catch{
      throw new NotFoundError(`combinção entre as chaves ${userID} e ${contractID} informadas, não tem relacionamento`)
    }
    
  }

  async remove(userID: string, contractID: string) {
    try{
      return await this.prismaService.userContratc.delete({
        where: {userID_contractID: {userID, contractID}}
      });
    }catch{
      throw new NotFoundError(`combinção entre as chaves ${userID} e ${contractID} informadas, não tem relacionamento`)
    }
  }
}
