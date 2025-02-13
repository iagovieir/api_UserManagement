import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';

@Injectable()
export class ContractService {

    constructor(private prismaService : PrismaService){}

  async create(createContractDto: CreateContractDto) {

    if (createContractDto.numberContract) {
          const secretaryExists = await this.prismaService.contracts.findUnique({
            where: { numberContract: createContractDto.numberContract },
          });
          if (secretaryExists){
            throw new HttpException({ field: 'numberContract', message: 'numberContract informado já cadatrado.'}, HttpStatus.BAD_REQUEST);
          }
        }

    return this.prismaService.contracts.create({
      data: {...createContractDto,
        startDate: new Date(createContractDto.startDate),
        endDate: new Date(createContractDto.endDate)
      }
    });
  }

  findAll() {
    return this.prismaService.contracts.findMany({
      select:{
        numberContract: true,
        titulo: true,
        nameObjetc: true,
        startDate: true,
        endDate: true,
        users: {
          select: {
            user: {
              select:{
                CPF: true,
                name: true,
                corporate_email: true
              }
            }
          }
        }
      }
    });
  }

  findOne(numberContract: string) {
    return this.prismaService.contracts.findFirstOrThrow({
      where: {numberContract}
    });
  }

  update(numberContract: string, updateContractDto: UpdateContractDto) {
    return `This action updates a #${numberContract} contract`;
  }

  remove(numberContract: string) {
    return this.prismaService.contracts.delete({
      where: {numberContract}
    })
  }
}
