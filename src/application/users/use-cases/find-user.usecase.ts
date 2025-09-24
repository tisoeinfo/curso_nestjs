import { Injectable } from '@nestjs/common';
// import { UserRepositoryImpl } from '../../../infrastructure/users/repositories/user.repository.impl';
import { User } from '../../../domain/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class FindUserUseCase {
  // execute(id: string): string {
  //   return `El ID del Usuario es ${id}`;
  // }
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) { }

  async execute(id: number): Promise<User | null> {
    return await this.userRepository.findOneBy({id});
  }
}
