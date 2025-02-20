import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { AuthService } from 'src/auth/auth.service';
import { Public } from 'src/auth/public.decorator';
import { Roles } from 'src/auth/role.decorator';
import { UserRole } from 'src/routes-relations/roles-to-user/dto/create-roles-to-user.dto';

@ApiBearerAuth()
@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService, private readonly authService: AuthService) {}
  
  @Post()
  @ApiBody({type: CreateUserDto})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Roles(UserRole.ADMIN)
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

  @Public()
  @ApiBody({type: LoginDto})
  @Post('login')
  async login(@Body() body) {
    return this.authService.login(body.CPF, body.password);
  }
}
