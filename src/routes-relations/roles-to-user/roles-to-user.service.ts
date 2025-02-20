import { Injectable } from '@nestjs/common';
import { CreateRolesToUserDto } from './dto/create-roles-to-user.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';

@Injectable()
export class RolesToUserService {

  constructor(private prismaService: PrismaService){}

  create(createRolesToUserDto: CreateRolesToUserDto) {
    return this.prismaService.userRoleOnUsers.create({
      data: createRolesToUserDto
    });
  }

  findAll() {
    return this.prismaService.userRoleOnUsers.findMany();
  }

  findOne(id: number) {
    return this.prismaService.userRoleOnUsers.findUniqueOrThrow({
      where: {id}
    });
  }

  remove(id: number) {
    return this.prismaService.userRoleOnUsers.delete({
      where: {id}
    });
  }
}
