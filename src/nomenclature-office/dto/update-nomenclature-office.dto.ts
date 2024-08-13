import { PartialType } from '@nestjs/mapped-types';
import { CreateNomenclatureOfficeDto } from './create-nomenclature-office.dto';

export class UpdateNomenclatureOfficeDto extends PartialType(CreateNomenclatureOfficeDto) {}
