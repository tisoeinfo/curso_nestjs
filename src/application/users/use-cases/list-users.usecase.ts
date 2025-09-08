import { Injectable } from '@nestjs/common';
import { UserRepositoryImpl } from '../../../infrastructure/users/repositories/user.repository.impl';
import { User } from '../../../domain/users/entities/user.entity';

@Injectable()
export class ListUsersUseCase {
  // execute(): string {
  //   return "Listamos todos los usuarios";
  // }
  constructor(private readonly userRepository: UserRepositoryImpl) {}

  async execute(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
