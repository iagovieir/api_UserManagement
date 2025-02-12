import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContractService } from './contract.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @ApiBody({type: CreateContractDto})
  @Post()
  create(@Body() createContractDto: CreateContractDto) {
    return this.contractService.create(createContractDto);
  }

  @Get()
  findAll() {
    return this.contractService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') numberContract: string) {
    return this.contractService.findOne(numberContract);
  }

  @ApiBody({type: UpdateContractDto})
  @Patch(':id')
  update(@Param('id') numberContract: string, @Body() updateContractDto: UpdateContractDto) {
    return this.contractService.update(numberContract, updateContractDto);
  }

  @Delete(':id')
  remove(@Param('id') numberContract: string) {
    return this.contractService.remove(numberContract);
  }
}
