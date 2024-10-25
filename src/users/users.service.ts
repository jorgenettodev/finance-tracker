import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any = [
    { id: 0, name: 'Tata' },
    { id: 1, name: 'Brunno' },
    { id: 2, name: 'Ohan' },
  ];
  findUsers(): any {
    return this.users;
  }

  findUserById(userId: number): any {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUserDto: CreateUserDto): any {
    const newUser: any = {
      id: Date.now(),
      ...createUserDto,
    };

    this.users.push(newUser);
    return newUser;
  }
}
