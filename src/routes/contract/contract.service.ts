import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';
import { addDays, subDays } from 'date-fns';

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

  async findOne(numberContract: string) {
    try{
      return await this.prismaService.contracts.findFirstOrThrow({
        where: {numberContract}
      });
    }catch(error){
      throw new NotFoundError(`Nontrato com o número ${numberContract} não encontratdo`);
    };
    
  }

  async update(numberContract: string, updateContractDto: UpdateContractDto) {
    return await this.prismaService.contracts.update({
      where: {numberContract},
      data: {...updateContractDto,
        startDate: updateContractDto.startDate ? new Date(updateContractDto.startDate): undefined,
        endDate: updateContractDto.endDate ? new Date(updateContractDto.endDate): undefined
      }
    });
  }

  async remove(numberContract: string) {
    try{
      return await this.prismaService.contracts.delete({
        where: {numberContract}
      })
    }catch(error){
      throw new NotFoundError(`Nontrato com o número ${numberContract} não encontratdo`);
  };
    
  }

  async findExpiringContracts() {

    const today = new Date();
    const datesToCheck = [60, 45, 30, 15].map(days => {
      const date = new Date();
      date.setDate(today.getDate() + days);
      date.setHours(0, 0, 0, 0); // Define a hora para meia-noite, evitando problemas de precisão
      return date;
    });

    console.log(datesToCheck)

    return await this.prismaService.contracts.findMany({
      where: {
        OR: datesToCheck.map(date => ({
          endDate: {
            gte: today,
            lt: date, 
          },
        })),
      },
      
      include: {
        users: {
          select: {
            user: {
              select:{
                name: true,
                CPF: true,
                corporate_email: true
              }
            }
          }
        },
      },
    });
  }
}
