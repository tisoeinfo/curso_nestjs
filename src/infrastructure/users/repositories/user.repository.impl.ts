import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/users/repositories/user.repository';
import { User } from '../../../domain/users/entities/user.entity';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
    private users: User[] = [];
    private currentId = 1;

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async findById(id: number): Promise<User | null> {
        return this.users.find(u => u.id === id) || null;
    }

    async create(user: User): Promise<User> {
        const newUser = new User(this.currentId++, user.nombre, user.email);
        this.users.push(newUser);
        return newUser;
    }
}
