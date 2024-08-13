import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateNomenclatureOfficeDto } from './dto/create-nomenclature-office.dto';
import { UpdateNomenclatureOfficeDto } from './dto/update-nomenclature-office.dto';

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
      include:{
        TypeOffice: true
      }
    });
  }

  findOne(id: number) {
    return this.prismaService.nomenclatureOffice.findUnique({
      where: {id},
      include:{
        TypeOffice: true
      }
    });
  }

  update(id: number, UpdateNomenclatureOfficeDto: UpdateNomenclatureOfficeDto) {
    return this.prismaService.nomenclatureOffice.update({
      where: {id}, 
      data: UpdateNomenclatureOfficeDto
    });
  }

  remove(id: number) {
    return this.prismaService.nomenclatureOffice.delete({
      where: {id}
    });
  }
}
