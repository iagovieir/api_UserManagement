import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';
import * as bcrypt from 'bcrypt';
import { UtilsService } from 'src/utils/utils.service';

@Injectable()
export class UsersService {

  constructor(private prismaService: PrismaService, private utilsService: UtilsService){

  };
  
  async create(createUserDto: CreateUserDto) {

    await this.utilsService.validateUniqueField(
     'users', 'CPF', createUserDto.CPF, 'Valor informado em CPF já cadastrado'
    );
    await this.utilsService.validateUniqueField(
      'users', 'corporate_email', createUserDto.corporate_email, 'Valor informado em e-mail corporativo já cadastrado'
    );
    await this.utilsService.validateUniqueField(
      'users', 'personal_email', createUserDto.personal_email, 'Valor informado em e-mail pessoal já cadastrado'
    );

    await this.utilsService.validateForeignKeys<CreateUserDto>(createUserDto, [
      { key: 'secretaryID', model: 'secretary', referencialField: 'id', message: 'secretaryID informado não existe.' },
      { key: 'statusID', model: 'status', referencialField: 'id', message: 'statusID informado não existe.' },
      { key: 'roleID', model: 'role', referencialField: 'id', message: 'roleID informado não existe.' },
      { key: 'sectorID', model: 'sector', referencialField: 'id', message: 'sectorID informado não existe.' },
      { key: 'sexID', model: 'sex', referencialField: 'id', message: 'sexID informado não existe.' },
      { key: 'nomenclatureOfficeID', referencialField: 'id', model: 'nomenclatureOffice', message: 'nomenclatureOfficeID informado não existe.' },
    ]);
    

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt)

    const userSave = await this.prismaService.users.create({
      data: {
        ...createUserDto,
        date_of_birth: createUserDto.date_of_birth ? new Date(createUserDto.date_of_birth) : undefined,
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
        leader:{
          select: {
            name: true,
            CPF: true
          }
        },
        subordinates: {
          select: {
            name: true,
            CPF: true
          }
        },
        contracts:{
          select:{
             contracts:{
              select:{
                titulo: true,
                numberContract: true
              }
             }
          }
        },
        phone: {
          select: {
            phone: true
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
          leader:{
            select: {
              name: true,
              CPF: true
            }
          },
          subordinates: {
            select: {
              name: true,
              CPF: true
            }
          },
          contracts:{
            select:{
               contracts:{
                select:{
                  titulo: true,
                  numberContract: true
                }
               }
            }
          },
          phone: {
            select: {
              phone: true
            }
          }
        }
      });
    }catch(error){
        throw new NotFoundError(`Usário com o CPF ${CPF} não encontratdo`);
    };
    
  };

  async update(CPF: string, updateUserDto: UpdateUserDto) {

    await this.utilsService.validateForeignKeys<UpdateUserDto>(updateUserDto, [
      { key: 'secretaryID', model: 'secretary', referencialField: 'id', message: 'secretaryID informado não existe.' },
      { key: 'statusID', model: 'status', referencialField: 'id', message: 'statusID informado não existe.' },
      { key: 'roleID', model: 'role', referencialField: 'id', message: 'roleID informado não existe.' },
      { key: 'sectorID', model: 'sector', referencialField: 'id', message: 'sectorID informado não existe.' },
      { key: 'sexID', model: 'sex', referencialField: 'id', message: 'sexID informado não existe.' },
      { key: 'nomenclatureOfficeID', referencialField: 'id', model: 'nomenclatureOffice', message: 'nomenclatureOfficeID informado não existe.' },
    ]);
    

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
