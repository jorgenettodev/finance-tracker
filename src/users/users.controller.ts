import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers(): User[] {
    return this.usersService.findUsers();
  }

  //   create an endpoint getUserById
  @Get(':id')
  getUserById(@Param('id') id: number): User {
    return this.usersService.findUserById(Number(id));
  }

  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }

  // criar um método para deletar um usuário
  @Delete(':id')
  deleteUser(@Param('id') id: number): User {
    return this.usersService.deleteUser(Number(id));
  }
}
