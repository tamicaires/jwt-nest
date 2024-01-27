import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor (private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.findByEmail(createUserDto.email)
    if (existingUser) {
      throw new HttpException('Email already exists!', HttpStatus.BAD_REQUEST);
    };

    const data = {
      ...createUserDto, 
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    try{
    const createdUser = await this.prisma.user.create({ data });

    return {
      ...createdUser, 
      password: undefined,
    };
    } catch (error) {
      throw new HttpException('Failed to create user', HttpStatus.INTERNAL_SERVER_ERROR);
    };
    
  }
  

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email }
    });
  }

}
