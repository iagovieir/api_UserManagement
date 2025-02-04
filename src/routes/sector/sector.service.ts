import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';

@Injectable()
export class SectorService {

  constructor(private prismaService: PrismaService){}

  async create(createSectorDto: CreateSectorDto) {

    if (createSectorDto.name) {
          const sectorExists = await this.prismaService.sector.findUnique({
            where: { name: createSectorDto.name },
          });
          if (sectorExists){
            throw new HttpException({ field: 'name', message: 'Nome informado já cadatrado.'}, HttpStatus.BAD_REQUEST);
          }
        }

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
      if(error.code === 'P2025'){
        throw new NotFoundError(`Setor com o ID ${id} não encontratdo`);
      }; 
  }   
}

  async update(id: number, updateSectorDto: UpdateSectorDto) { 
    try{
      return await this.prismaService.sector.update({
      where: {id},
      data: updateSectorDto
    });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Setor com o ID ${id} não encontratdo`);
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
        throw new NotFoundError(`Setor com o ID ${id} não encontratdo`);
      };
  }
}
}
