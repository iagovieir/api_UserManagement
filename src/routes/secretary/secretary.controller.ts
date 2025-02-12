import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SecretaryService } from './secretary.service';
import { CreateSecretaryDto } from './dto/create-secretary.dto';
import { UpdateSecretaryDto } from './dto/update-secretary.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('secretary')
export class SecretaryController {
  constructor(private readonly secretaryService: SecretaryService) {}

  @ApiBody({type: CreateSecretaryDto})
  @Post()
  create(@Body() createSecretaryDto: CreateSecretaryDto) {
    return this.secretaryService.create(createSecretaryDto);
  }

  @Get()
  findAll() {
    return this.secretaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.secretaryService.findOne(+id);
  }

  @ApiBody({type: UpdateSecretaryDto})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSecretaryDto: UpdateSecretaryDto) {
    return this.secretaryService.update(+id, updateSecretaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.secretaryService.remove(+id);
  }
}
