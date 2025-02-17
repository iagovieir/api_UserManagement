import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserToContractService } from './user-to-contract.service';
import { CreateUserToContractDto } from './dto/create-user-to-contract.dto';
import { UpdateUserToContractDto } from './dto/update-user-to-contract.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('user-to-contract')
export class UserToContractController {
  constructor(private readonly userToContractService: UserToContractService) {}

  @ApiBody({type: CreateUserToContractDto})
  @Post()
  create(@Body() createUserToContractDto: CreateUserToContractDto) {
    return this.userToContractService.create(createUserToContractDto);
  }

  @Get()
  findAll() {
    return this.userToContractService.findAll();
  }

  @ApiBody({type:UpdateUserToContractDto})
  @Patch(':userID/:contractID')
  update(@Param('userID') userID: string, @Param('contractID')contractID: string, @Body() updateUserToContractDto: UpdateUserToContractDto) {
    return this.userToContractService.update(userID, contractID, updateUserToContractDto);
  }

  @Delete(':userID/:contractID')
  remove(@Param('userID') userID: string, @Param('contractID')contractID: string) {
    return this.userToContractService.remove(userID, contractID);
  }
}
