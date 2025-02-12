import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeOfficeService } from './type-office.service';
import { CreateTypeOfficeDto } from './dto/create-type-office.dto';
import { UpdateTypeOfficeDto } from './dto/update-type-office.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('type-office')
export class TypeOfficeController {
  
  constructor(private readonly TypeOfficeService: TypeOfficeService) {}

  @ApiBody({type: CreateTypeOfficeDto})
  @Post()
  create(@Body() CreateTypeOfficeDto: CreateTypeOfficeDto) {
    return this.TypeOfficeService.create(CreateTypeOfficeDto);
  }

  @Get()
  findAll() {
    return this.TypeOfficeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.TypeOfficeService.findOne(+id);
  }

  @ApiBody({type: UpdateTypeOfficeDto})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeOfficeDto: UpdateTypeOfficeDto) {
    return this.TypeOfficeService.update(+id, updateTypeOfficeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.TypeOfficeService.remove(+id);
  }
}
