import { Injectable } from '@nestjs/common';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';
import { UtilsService } from 'src/utils/utils.service';

@Injectable()
export class SectorService {

  constructor(private prismaService: PrismaService, private utilsService: UtilsService){}

  async create(createSectorDto: CreateSectorDto) {

    await this.utilsService.validateUniqueField('sector', 'name', createSectorDto.name, 'Valor informado em name já cadatrado.')

    return await this.prismaService.sector.create({
      data: createSectorDto
    });
  }

  findAll() {
    return this.prismaService.sector.findMany();
  }

  async findOne(id: number) {
    try{
      return await this.prismaService.sector.findUniqueOrThrow({
      where: {id}
    });
    }catch(error){
        throw new NotFoundError(`Setor com o ID ${id} não encontratdo`);
  }   
}

  async update(id: number, updateSectorDto: UpdateSectorDto) { 
    try{
      return await this.prismaService.sector.update({
      where: {id},
      data: updateSectorDto
    });
    }catch(error){
        throw new NotFoundError(`Setor com o ID ${id} não encontratdo`);
  }  
}

  async remove(id: number) {
    try{
      return await this.prismaService.secretary.delete({
      where: {id}
    });
    }catch(error){
        throw new NotFoundError(`Setor com o ID ${id} não encontratdo`);
  }
}
}
