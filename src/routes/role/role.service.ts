import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { UtilsService } from 'src/utils/utils.service';
import { NotFoundError } from 'src/error';

@Injectable()
export class RoleService {

  constructor(private prismaService: PrismaService, private utilsService: UtilsService){}

  async create(createRoleDto: CreateRoleDto) {

    await this.utilsService.validateUniqueField('role', 'TypeRole', createRoleDto.typeRole, 'Valor informado em typeRole já cadastrado.')

    return this.prismaService.role.create({
      data: createRoleDto
    });
  }

  findAll() {
    return this.prismaService.role.findMany();
  }

  async findOne(id: number) {

    try{
      return this.prismaService.role.findFirstOrThrow({
        where: {id}
      });
    }catch(error){
      throw new NotFoundError(`Role com id ${id} não encontratdo`);
  };
   
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    try{
      return this.prismaService.role.update({
        where: {id},
        data: updateRoleDto
      })
    }catch(error){
      throw new NotFoundError(`Role com id ${id} não encontratdo`);
  };
  }

  async remove(id: number) {
    try{
      return this.prismaService.role.delete({
        where: {id}
      });
    }catch(error){
      throw new NotFoundError(`Role com id ${id} não encontratdo`);
  };
    
  }
}
