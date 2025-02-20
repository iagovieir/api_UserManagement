import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesToUserService } from './roles-to-user.service';
import { CreateRolesToUserDto } from './dto/create-roles-to-user.dto';
import { UpdateRolesToUserDto } from './dto/update-roles-to-user.dto';
import { ApiBasicAuth, ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('roles-to-user')
export class RolesToUserController {
  constructor(private readonly rolesToUserService: RolesToUserService) {}

  @ApiBody({type: CreateRolesToUserDto})
  @Post()
  create(@Body() createRolesToUserDto: CreateRolesToUserDto) {
    return this.rolesToUserService.create(createRolesToUserDto);
  }

  @Get()
  findAll() {
    return this.rolesToUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesToUserService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesToUserService.remove(+id);
  }
}
