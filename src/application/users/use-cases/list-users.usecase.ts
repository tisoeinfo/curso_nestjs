import { Injectable } from '@nestjs/common';
// import { UserRepositoryImpl } from '../../../infrastructure/users/repositories/user.repository.impl';
import { User } from '../../../domain/users/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ListUsersUseCase {



  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async execute(): Promise<User[]> {
    // El metodo find() de TypeORM equivale a un select * from users
    return await this.userRepository.find();
  }
}
