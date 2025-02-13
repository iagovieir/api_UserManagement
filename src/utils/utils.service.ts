import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { CreateUserDto } from 'src/routes/users/dto/create-user.dto';

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



  async validateForeignKeys(dto: Partial<CreateUserDto>) {
      const foreignKeys = [
        { key: 'secretaryID', model: 'secretary', message: 'secretaryID informado não existe.' },
        { key: 'statusID', model: 'status', message: 'statusID informado não existe.' },
        { key: 'roleID', model: 'role', message: 'roleID informado não existe.' },
        { key: 'sectorID', model: 'sector', message: 'sectorID informado não existe.' },
        { key: 'sexID', model: 'sex', message: 'sexID informado não existe.' },
        { key: 'nomenclatureOfficeID', model: 'nomenclatureOffice', message: 'nomenclatureOfficeID informado não existe.' },
      ];
    
      const errors = (
        await Promise.all(
          foreignKeys.map(async ({ key, model, message }) => {
            const value = dto[key as keyof Partial<CreateUserDto>];
            if (!value) return null; 
    
            const exists = await this.prismaService[model].findUnique({ where: { id: value } });
            return exists ? null : { field: key, message };
          })
        )
      ).filter(error => error !== null);
    
      if (errors.length > 0) {
        throw new HttpException({ errors }, HttpStatus.BAD_REQUEST);
      }
    }
}




  