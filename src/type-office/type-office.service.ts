import { Injectable } from '@nestjs/common';
import { CreateTypeOfficeDto } from './dto/create-type-office.dto';
import { UpdateTypeOfficeDto } from './dto/update-type-office.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TypeOfficeService {

  constructor(private prismaService: PrismaService){}

  create(CreateTypeOfficeDto: CreateTypeOfficeDto) {
    return this.prismaService.typeOffice.create({
      data: CreateTypeOfficeDto
    }) ;
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

  findOne(id: number) {
    return `This action returns a #${id} typeJob`;
  }

  update(id: number, updateTypeOfficeDto: UpdateTypeOfficeDto) {
    return `This action updates a #${id} typeJob`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeJob`;
  }
}
