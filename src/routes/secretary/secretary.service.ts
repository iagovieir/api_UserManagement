import { Injectable } from '@nestjs/common';
import { CreateSecretaryDto } from './dto/create-secretary.dto';
import { UpdateSecretaryDto } from './dto/update-secretary.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';
import { UtilsService } from 'src/utils/utils.service';

@Injectable()
export class SecretaryService {

  constructor(private prismaService: PrismaService, private utilsService: UtilsService){}
  
  async create(createSecretaryDto: CreateSecretaryDto) {

    await this.utilsService.validateUniqueField('secretary', 'name', createSecretaryDto.name, 'Valor informado em name já cadatrado.')

    return await this.prismaService.secretary.create({
      data: createSecretaryDto
    });
  }

  findAll() {
    return this.prismaService.secretary.findMany();
  }

  async findOne(id: number) {
    try{
      return await this.prismaService.secretary.findUniqueOrThrow({
      where: {id}
    });
    }catch(error){
        throw new NotFoundError(`Secretaria com o ID ${id} não encontratdo`);
    }
  }

  async update(id: number, updateSecretaryDto: UpdateSecretaryDto) {
    try{
      return await this.prismaService.secretary.update({
      where: {id},
      data: updateSecretaryDto
    });
    }catch(error){
        throw new NotFoundError(`Secretaria com o ID ${id} não encontratdo`);
    }
  }

  async remove(id: number) {
    try{
      return await this.prismaService.secretary.delete({
      where: {id}
    });
    }catch(error){
        throw new NotFoundError(`Secretaria com o ID ${id} não encontratdo`);
    
  }
  }
}
