import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NomenclaturesOfficeService } from './nomenclatures-office.service';
import { CreateNomenclatureOfficeDto } from './dto/create-nomenclature-office.dto';
import { UpdateNomenclatureOfficeDto } from './dto/update-nomenclature-office.dto';

@Controller('nomenclatures-office')
export class NomenclaturesOfficeController {
  constructor(private readonly NomenclaturesOfficeService: NomenclaturesOfficeService) {}

  @Post()
  create(@Body() CreateNomenclatureOfficeDto: CreateNomenclatureOfficeDto) {
    return this.NomenclaturesOfficeService.create(CreateNomenclatureOfficeDto);
  }

  @Get()
  findAll() {
    return this.NomenclaturesOfficeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.NomenclaturesOfficeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateNomenclatureOfficeDto: UpdateNomenclatureOfficeDto) {
    return this.NomenclaturesOfficeService.update(+id, UpdateNomenclatureOfficeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.NomenclaturesOfficeService.remove(+id);
  }
}
