import { Injectable } from '@nestjs/common';
import { CreateNomenclatureOfficeDto } from './dto/create-nomenclature-office.dto';
import { UpdateNomenclatureOfficeDto } from './dto/update-nomenclature-office.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';


@Injectable()
export class NomenclaturesOfficeService {

    constructor(private prismaService: PrismaService){}

  create(CreateNomenclatureOfficeDto: CreateNomenclatureOfficeDto) {
    return this.prismaService.nomenclatureOffice.create({
      data: CreateNomenclatureOfficeDto
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
      if(error.code === 'P2025'){
        throw new NotFoundError(`Cargo com o ID ${id} não encontratdo`);
      };
    };
      
  }

  async update(id: number, UpdateNomenclatureOfficeDto: UpdateNomenclatureOfficeDto) {
    try{
      return await this.prismaService.nomenclatureOffice.update({
        where: {id}, 
      data: UpdateNomenclatureOfficeDto
    });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Cargo com o ID ${id} não encontratdo`);
      };
    };
   
  }

  async remove(id: number) {
    try{
      return await this.prismaService.nomenclatureOffice.delete({
        where: {id}
      });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Cargo com o ID ${id} não encontratdo`);
      };
    };
  };
}
