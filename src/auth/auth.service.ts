import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService, private jwtService: JwtService){}

    async validateUser(CPF: string, password: string){
        const user = await this.prismaService.users.findUnique({
            where: {CPF},
            select:{
                CPF: true,
                corporate_email: true,
                password: true,
                role: {
                    select:{
                        role: true
                    }
                }
            }
        });
        if(!user|| !(await bcrypt.compare(password, user.password))){
            throw new UnauthorizedException('Credenciais inválidas')
        }
        return user;
    }

    async login(CPF: string, password: string){
        const user = await this.validateUser(CPF, password);
        const payload = {sub: user.CPF, email: user.corporate_email, role: user.role}
        return {acess_token: this.jwtService.sign(payload)}
    }


}
