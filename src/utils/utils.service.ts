import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma/prisma.service';

@Injectable()
export class UtilsService {

    constructor(private prismaService: PrismaService){}

async validateUniqueField( model: string, field: string, value: any, errorMessage: string) {
    
    if (!value) return;
  
    const recordExists = await (this.prismaService[model] as any).findUnique({
        where: { [field]: value },
      });
  
    if (recordExists) {
      throw new HttpException({ field, message: errorMessage }, HttpStatus.BAD_REQUEST);
    }
  }



  async validateForeignKeys<T>(dto: Partial<T>, foreignKeys: { key: keyof T; model: string; referencialField: string; message: string }[]) {
    const errors = (
      await Promise.all(
        foreignKeys.map(async ({ key, model, referencialField, message }) => {
          const value = dto[key];
          if (!value) return null;
  
          const exists = await this.prismaService[model].findUnique({ where: { [referencialField]: value } });
          return exists ? null : { field: key, message };
        })
      )
    ).filter(error => error !== null);
  
    if (errors.length > 0) {
      throw new HttpException({ errors }, HttpStatus.BAD_REQUEST);
    }
  }
  
}




  