import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';

@Injectable()
export class PhoneService {

  constructor(private prismaService: PrismaService){}

  async create(createPhoneDto: CreatePhoneDto) {

    if (createPhoneDto.phone) {
      const phoneExists = await this.prismaService.phone.findUnique({
        where: { phone: createPhoneDto.phone },
      });
        if (phoneExists){
          throw new HttpException({ field: 'phone', message: 'Número de celular informado já cadatrado.'}, HttpStatus.BAD_REQUEST);
        }
    }
    if(createPhoneDto.user_Id){
      const usersExists = await this.prismaService.users.findUnique({
        where: { CPF: createPhoneDto.user_Id },
      });
      if(!usersExists){
        throw new HttpException({ field: 'user_Id', message: 'CPF informado não existe.'}, HttpStatus.BAD_REQUEST);
      }
    }

    return this.prismaService.phone.create({
      data: createPhoneDto
    });
  }

  findAll() {
    return this.prismaService.phone.findMany({
      include: {
        user_phone: {
          select:{
            name: true
          }
        }
      }
    });
  }

 async findOne(id: number) {
  try{
    return await this.prismaService.phone.findUniqueOrThrow({
      where: {id},
      include: {
        user_phone: {
          select:{
            name: true
          }
        }
      }
    });
  }catch(error){
      throw new NotFoundError(`Telefone com o ID ${id} não encontratdo`);
  }
}  
  
  

  async update(id: number, updatePhoneDto: UpdatePhoneDto) {
    try{
      return await this.prismaService.phone.update({
      where: {id},
      data: updatePhoneDto
    });
    }catch(error){
        throw new NotFoundError(`Telefone com o ID ${id} não encontratdo`);
  }
  }
  async remove(id: number) {
    try{
      return await this.prismaService.phone.delete({
      where: {id}
    });
    }catch(error){
        throw new NotFoundError(`Telefone com o ID ${id} não encontratdo`);
  }
}
}
