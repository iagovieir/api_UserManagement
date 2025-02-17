import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Post()
  @ApiBody({type: CreateUserDto})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':CPF')
  findOne(@Param('CPF') CPF: string) {
    return this.usersService.findOne(CPF);
  }

  @ApiBody({type: UpdateUserDto})
  @Patch(':CPF')
  update(@Param('CPF') CPF: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(CPF, updateUserDto);
  }

  @Delete(':CPF')
  remove(@Param('CPF') CPF: string) {
    return this.usersService.remove(CPF);
  }
}
