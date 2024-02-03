import { Body, Controller, Delete, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { handleException } from 'src/utils/handleException';
import { User } from '@prisma/client';
import { Role } from 'src/auth/decorators/roles.decorator';
import { AuthorizationGuard } from 'src/auth/guards/authorization.guard';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthorizationGuard)
  @Role('ADMIN')
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await handleException(this.userService.delete(id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: User) {
    return await handleException(this.userService.update(id, user));
  }
}
