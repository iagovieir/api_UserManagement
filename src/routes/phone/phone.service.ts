import { Injectable } from '@nestjs/common';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';

@Injectable()
export class PhoneService {

  constructor(private prismaService: PrismaService){}

  create(createPhoneDto: CreatePhoneDto) {
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
    if(error.code === 'P2025'){
      throw new NotFoundError(`Telefone com o ID ${id} não encontratdo`);
    };
  }
}  
  
  

  async update(id: number, updatePhoneDto: UpdatePhoneDto) {
    try{
      return await this.prismaService.phone.update({
      where: {id},
      data: updatePhoneDto
    });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Telefone com o ID ${id} não encontratdo`);
      };
    
  }
  }
  async remove(id: number) {
    try{
      return await this.prismaService.phone.delete({
      where: {id}
    });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Telefone com o ID ${id} não encontratdo`);
      };
    
  }
}
}
