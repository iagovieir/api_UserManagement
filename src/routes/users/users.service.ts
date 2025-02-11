import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {

  constructor(private prismaService: PrismaService){

  };

  async validateForeignKeys(dto: Partial<CreateUserDto>) {
    const foreignKeys = [
      { key: 'secretaryID', model: 'secretary', message: 'secretaryID informado não existe.' },
      { key: 'statusID', model: 'status', message: 'statusID informado não existe.' },
      { key: 'roleID', model: 'role', message: 'roleID informado não existe.' },
      { key: 'sectorID', model: 'sector', message: 'sectorID informado não existe.' },
      { key: 'sexID', model: 'sex', message: 'sexID informado não existe.' },
      { key: 'nomenclatureOfficeID', model: 'nomenclatureOffice', message: 'nomenclatureOfficeID informado não existe.' },
    ];
  
    const errors = (
      await Promise.all(
        foreignKeys.map(async ({ key, model, message }) => {
          const value = dto[key as keyof Partial<CreateUserDto>];
          if (!value) return null; 
  
          const exists = await this.prismaService[model].findUnique({ where: { id: value } });
          return exists ? null : { field: key, message };
        })
      )
    ).filter(error => error !== null);
  
    if (errors.length > 0) {
      throw new HttpException({ errors }, HttpStatus.BAD_REQUEST);
    }
  }
  
  async create(createUserDto: CreateUserDto) {

    if (createUserDto.CPF) {
      const usersExists = await this.prismaService.users.findUnique({
        where: { CPF: createUserDto.CPF },
      });
        if (usersExists){
          throw new HttpException({ field: 'CPF', message: 'CPF informado já cadatrado.'}, HttpStatus.BAD_REQUEST);
        }
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt)

    await this.validateForeignKeys(createUserDto)

    const userSave = await this.prismaService.users.create({
      data: {
        ...createUserDto,
        password: hashedPassword
      }
    });

      delete userSave.password;
      return userSave;
  };

  findAll() {
    return this.prismaService.users.findMany({
      select:{
        CPF: true,
        name: true,
        corporate_email: true,
        personal_email: true,
        matriculation: true,
        date_of_birth: true,
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
        }, 
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

    await this.validateForeignKeys(updateUserDto)

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

      const deleteUser = await this.prismaService.users.delete({
      where:{CPF}
    });
      delete deleteUser.password;
      return deleteUser;

    }catch(error){
        throw new NotFoundError(`Usário com o CPF ${CPF} não encontratdo`);

    };
    
  };
};
