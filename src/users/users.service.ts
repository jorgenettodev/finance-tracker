import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: any = [
    { id: 0, name: 'Tata' },
    { id: 1, name: 'Brunno' },
    { id: 2, name: 'Ohan' },
  ];
  findUsers(): User[] {
    return this.users;
  }

  findUserById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser: any = {
      id: Date.now(),
      name: createUserDto.name,
      email: createUserDto.email,
    };

    this.users.push(newUser);
    return newUser;
  }

  deleteUser(id: number): User {
    // find the user
    const user = this.users.find((user) => user.id === id);
    if (user) {
      const userIndex = this.users.indexOf(user);
      this.users.splice(userIndex, 1);
      return user;
    }

    // remove the user from the array;
  }
}
