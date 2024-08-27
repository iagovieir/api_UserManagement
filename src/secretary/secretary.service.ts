import { Injectable } from '@nestjs/common';
import { CreateSecretaryDto } from './dto/create-secretary.dto';
import { UpdateSecretaryDto } from './dto/update-secretary.dto';

@Injectable()
export class SecretaryService {
  create(createSecretaryDto: CreateSecretaryDto) {
    return 'This action adds a new secretary';
  }

  findAll() {
    return `This action returns all secretary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} secretary`;
  }

  update(id: number, updateSecretaryDto: UpdateSecretaryDto) {
    return `This action updates a #${id} secretary`;
  }

  remove(id: number) {
    return `This action removes a #${id} secretary`;
  }
}
