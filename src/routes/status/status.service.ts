import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';
import { UtilsService } from 'src/utils/utils.service';

@Injectable()
export class StatusService {

  constructor( private prismaService: PrismaService, private utilsService: UtilsService){}

  async create(createStatusDto: CreateStatusDto) {
    
    await this.utilsService.validateUniqueField('status', 'name', createStatusDto.name, 'Valor informado em name já cadastrado')

    return await this.prismaService.status.create({
      data: createStatusDto
    })
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
      throw new NotFoundError(`Status com o ID ${id} não encontratdo`);
  }
}

  async update(id: number, updateStatusDto: UpdateStatusDto) {
  try{
    return await this.prismaService.status.update({
      where: {id},
      data: updateStatusDto
    });
  }catch(error){
      throw new NotFoundError(`Status com o ID ${id} não encontratdo`);
  }
}

  async remove(id: number) {
    try{
      return await this.prismaService.status.delete({
        where: {id}
      })
    }catch(error){
        throw new NotFoundError(`Status com o ID ${id} não encontratdo`);
  }
  }
}
