import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeOfficeDto } from './create-type-office.dto';

export class UpdateTypeOfficeDto extends PartialType(CreateTypeOfficeDto) {}
