import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';

@Injectable()
export class UsersService {

  constructor(private prismaService: PrismaService){

  };

  async create(createUserDto: CreateUserDto) {

    if (createUserDto.CPF) {
      const usersExists = await this.prismaService.users.findUnique({
        where: { CPF: createUserDto.CPF },
      });
        if (usersExists){
          throw new HttpException({ field: 'CPF', message: 'CPF informado já cadatrado.'}, HttpStatus.BAD_REQUEST);
        } 
    }
      return this.prismaService.users.create({
        data: createUserDto
      });
  };

  findAll() {
    return this.prismaService.users.findMany({
      select:{
        CPF: true,
        name: true,
        corporate_email: true,
        personal_email: true,
        matriculation: true,
        date_of_birth:true,
        createdAt: true,
        updatedAt: true,
        role:{
          select:{
            typeRole: true,
          }
        },
        sector: {
          select: {
            name: true
          }
        },
        sex: {
          select: {
            name: true
          }
        },
        status: {
          select: {
            name: true
          }
        },
        subordinates: {
          select: {
            name: true,
            CPF: true
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

  async findOne(CPF: string) {
    try{
      return await this.prismaService.users.findUniqueOrThrow({
        where: {
          CPF
        },
        select:{
          CPF: true,
          name: true,
          corporate_email: true,
          personal_email: true,
          matriculation: true,
          date_of_birth:true,
          createdAt: true,
          updatedAt: true,
          role:{
            select:{
              typeRole: true,
            }
          },
          sector: {
            select: {
              name: true
            }
          },
          sex: {
            select: {
              name: true
            }
          },
          status: {
            select: {
              name: true
            }
          },
          subordinates: {
            select: {
              name: true,
              CPF: true
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
    }catch(error){
        throw new NotFoundError(`Usário com o CPF ${CPF} não encontratdo`);
    };
    
  };

  async update(CPF: string, updateUserDto: UpdateUserDto) {

    const errors = []

    if (updateUserDto.secretaryID) {
      const secretaryExists = await this.prismaService.secretary.findUnique({
        where: { id: updateUserDto.secretaryID },
      });
        if (!secretaryExists) errors.push({ field: 'secretaryID', message: 'secretaryID informado não existe.'}); 
    }

    if (updateUserDto.statusID) {
      const statusExists = await this.prismaService.status.findUnique({
        where: { id: updateUserDto.statusID },
      });
      if (!statusExists) errors.push({ field: 'statusID', message: 'statusID informado não existe.'});
    }
    if (updateUserDto.roleID) {
      const roleExists = await this.prismaService.role.findUnique({
        where: { id: updateUserDto.roleID },
      });
      if (!roleExists) errors.push({ field: 'roleID', message: 'roleID informado não existe.'});
    }

    if (errors.length > 0) {
      throw new HttpException({ errors }, HttpStatus.BAD_REQUEST);
    }

    try{
      return await this.prismaService.users.update({
        where: {CPF},
        data: updateUserDto
    });
    }catch(error){
        throw new NotFoundError(`Usário com o CPF ${CPF} não encontratdo`);
    };
    
  };

  async remove(CPF: string) {
    try{
      return await this.prismaService.users.delete({
      where:{CPF}
    });
    }catch(error){
        throw new NotFoundError(`Usário com o CPF ${CPF} não encontratdo`);

    };
    
  };
};
