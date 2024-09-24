import { Injectable } from '@nestjs/common';
import { CreateSecretaryDto } from './dto/create-secretary.dto';
import { UpdateSecretaryDto } from './dto/update-secretary.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';

@Injectable()
export class SecretaryService {

  constructor(private prismaService: PrismaService){

  }
  
  
  create(createSecretaryDto: CreateSecretaryDto) {
    return this.prismaService.secretary.create({
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
      if(error.code === 'P2025'){
        throw new NotFoundError(`Secretaria com o ID ${id} não encontratdo`);
      };
    }
  }

  async update(id: number, updateSecretaryDto: UpdateSecretaryDto) {
    try{
      return await this.prismaService.secretary.update({
      where: {id},
      data: updateSecretaryDto
    });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Secretaria com o ID ${id} não encontratdo`);
      };
    }
  }

  async remove(id: number) {
    try{
      return await this.prismaService.secretary.delete({
      where: {id}
    });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Secretaria com o ID ${id} não encontratdo`);
      };
    
  }
  }
}
