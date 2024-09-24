import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';

@Injectable()
export class StatusService {

  constructor( private prismaService: PrismaService){}
  create(createStatusDto: CreateStatusDto) {
    return 'This action adds a new status';
  }

  findAll() {
    return this.prismaService.status.findMany();
  }

  async findOne(id: number) {
  try{
    return await this.prismaService.status.findFirstOrThrow({
      where: {id}
    });
  }catch(error){
    if(error.code === 'P2025'){
      throw new NotFoundError(`Status com o ID ${id} não encontratdo`);
    };
  }
}

  async update(id: number, updateStatusDto: UpdateStatusDto) {
  try{
    return await this.prismaService.status.update({
      where: {id},
      data: updateStatusDto
    });
  }catch(error){
    if(error.code === 'P2025'){
      throw new NotFoundError(`Status com o ID ${id} não encontratdo`);
    };
  }
}

  async remove(id: number) {
    try{
      return await this.prismaService.status.delete({
        where: {id}
      })
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Status com o ID ${id} não encontratdo`);
      };
  }
  }
}
