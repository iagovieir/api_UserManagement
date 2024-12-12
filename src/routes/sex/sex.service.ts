import { Injectable } from '@nestjs/common';
import { CreateSexDto } from './dto/create-sex.dto';
import { UpdateSexDto } from './dto/update-sex.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';

@Injectable()
export class SexService {
  
  constructor(private prismaService: PrismaService){}
  
  create(createSexDto: CreateSexDto) {
    return this.prismaService.sex.create({
      data: createSexDto
    });
  }

  findAll() {
    return this.prismaService.sex.findMany({
      include:{
        users: {
           select:{
            name: true
           }
        }
      }
    });
  }

  async findOne(id: number) {
    try{
      return await this.prismaService.sex.findUniqueOrThrow({
      where: {id}
    });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Sexo com o ID ${id} não encontratdo`);
      };
  }
}

  async update(id: number, updateSexDto: UpdateSexDto) {
    try{
      return await this.prismaService.sex.update({
      where:{id},
      data: updateSexDto
    });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Sexo com o ID ${id} não encontratdo`);
      };
  }
}

  async remove(id: number) {
    try{
      return await this.prismaService.sex.delete({
      where: {id}
    });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Sexo com o ID ${id} não encontratdo`);
      };
  } 
}
}
