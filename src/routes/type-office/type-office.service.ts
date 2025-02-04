import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTypeOfficeDto } from './dto/create-type-office.dto';
import { UpdateTypeOfficeDto } from './dto/update-type-office.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';

@Injectable()
export class TypeOfficeService {

  constructor(private prismaService: PrismaService){}

  async create(CreateTypeOfficeDto: CreateTypeOfficeDto) {

    if (CreateTypeOfficeDto.name) {
      const typeOfficeExists = await this.prismaService.typeOffice.findUnique({
        where: { name: CreateTypeOfficeDto.name },
      });
      if (typeOfficeExists){
        throw new HttpException({ field: 'name', message: 'Nome informado já cadatrado.'}, HttpStatus.BAD_REQUEST);
      } 
    }

    return await this.prismaService.typeOffice.create({
      data: CreateTypeOfficeDto
    });
  }

  findAll() {
    return this.prismaService.typeOffice.findMany({
      include: {
        nomenclatureOffice: {
          select: {
            name: true
          }
        }
      }
    });
  }

  async findOne(id: number) {
    try{
      return await this.prismaService.typeOffice.findFirstOrThrow({
      where: {id}
    });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Tipo de Cargo com o id ${id} não encontratdo`);
      };
    };
    
  }

  async update(id: number, updateTypeOfficeDto: UpdateTypeOfficeDto) {
    try{
      return await this.prismaService.typeOffice.update({
        where: {id},
        data: updateTypeOfficeDto
      });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Tipo de Cargo com o id ${id} não encontratdo`);
      };
    };
  }

  async remove(id: number) {
    try{
      return await this.prismaService.typeOffice.delete({
        where: {id}
      });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Tipo de Cargo com o id ${id} não encontratdo`);
      };
    };
  }
}
