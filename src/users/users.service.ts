import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

  constructor(private prismaService: PrismaService){

  }

  create(createUserDto: CreateUserDto) {
    return this.prismaService.users.create({
      data: createUserDto
    });
  }

  findAll() {
    return this.prismaService.users.findMany({
      select:{
        CPF: true,
        name: true,
        corporate_email: true,
        personal_email: true,
        matriculation: true,
        date_of_birth:true,
        status: {
          select: {
            name: true
          }
        },
        subordinates: {
          select: {
            name: true,
            CPF: true,
          }
        },
        leader:{
          select: {
            name: true,
            CPF: true
          }
        },
        phone: {
          select: {
            phone: true
          }
        },
        NomenclatureOffice: {
          select:{
            name: true,
            TypeOffice: {
              select: {
                name: true
              }
            }
          }
        }
      }
    })
  }

  findOne(CPF: string) {
    return this.prismaService.users.findUnique({
      where: {
        CPF
      },
      select:{
        CPF: true,
        name: true,
        corporate_email: true,
        personal_email: true,
        matriculation: true,
        subordinates: {
          select: {
            name: true,
            CPF: true,
          }
        },
        leader:{
          select: {
            name: true,
            CPF: true
          }
        },
        phone: {
          select: {
            phone: true
          }
        },
        NomenclatureOffice: {
          select:{
            name: true,
            TypeOffice: {
              select: {
                name: true
              }
            }
          }
        }
      }
    });
  }

  update(CPF: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.users.update({
      where: {
        CPF
      },
      data: updateUserDto
    });
  }

  remove(CPF: string) {
    return this.prismaService.users.delete({
      where:{
        CPF
      }
    });
  }
}
