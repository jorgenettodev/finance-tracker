import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers(): any {
    return this.usersService.findUsers();
  }

  //   create an endpoint getUserById
  @Get(':id')
  getUserById(@Param('id') id: number): any {
    return this.usersService.findUserById(Number(id));
  }

  @Post()
  createUser(@Body() body: CreateUserDto): any {
    return this.usersService.createUser(body);
  }
}
