import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateNomenclatureOfficeDto } from './dto/create-nomenclature-office.dto';
import { UpdateNomenclatureOfficeDto } from './dto/update-nomenclature-office.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';


@Injectable()
export class NomenclaturesOfficeService {

    constructor(private prismaService: PrismaService){}

  async create(createNomenclatureOfficeDto: CreateNomenclatureOfficeDto) {

    if (createNomenclatureOfficeDto.name) {
      const secretaryExists = await this.prismaService.nomenclatureOffice.findUnique({
        where: { name: createNomenclatureOfficeDto.name },
      });
      if (secretaryExists){
        throw new HttpException({ field: 'name', message: 'Nome informado já cadatrado.'}, HttpStatus.BAD_REQUEST);
      }
    }

    if(createNomenclatureOfficeDto.typeOffice_ID){
      const typeOffice = await this.prismaService.typeOffice.findUnique({
        where: { id: createNomenclatureOfficeDto.typeOffice_ID }
      });
      if(!typeOffice){
        throw new HttpException({ field: 'typeOffice_ID', message: 'typeOffice_ID informado não existe.'}, HttpStatus.BAD_REQUEST);
      }
    }

    return this.prismaService.nomenclatureOffice.create({
      data: createNomenclatureOfficeDto
    });
  }

  findAll() {
    return this.prismaService.nomenclatureOffice.findMany({
      select:{
        id: true,
        name: true,
        TypeOffice:{
          select:{
            name: true
          }
        },
        users: {
          select:{
            name: true,
          }
        }
        
      }
    });
  }

 async findOne(id: number) {
    try{
      return await this.prismaService.nomenclatureOffice.findUniqueOrThrow({
        where: {id},
        select:{
          id:true,
          name: true,
          TypeOffice:{
            select:{
              name: true
            }
          },
            users: {
              select:{
                name: true,
                CPF:true
              }
            }
        }
    });
    }catch(error){
        throw new NotFoundError(`Cargo com o ID ${id} não encontratdo`);
    };
      
  }

  async update(id: number, UpdateNomenclatureOfficeDto: UpdateNomenclatureOfficeDto) {
    try{
      return await this.prismaService.nomenclatureOffice.update({
        where: {id}, 
      data: UpdateNomenclatureOfficeDto
    });
    }catch(error){
        throw new NotFoundError(`Cargo com o ID ${id} não encontratdo`);
    };
   
  }

  async remove(id: number) {
    try{
      return await this.prismaService.nomenclatureOffice.delete({
        where: {id}
      });
    }catch(error){
        throw new NotFoundError(`Cargo com o ID ${id} não encontratdo`);
    };
  };
}
