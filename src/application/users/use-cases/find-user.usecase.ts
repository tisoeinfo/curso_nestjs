import { Injectable } from '@nestjs/common';
import { UserRepositoryImpl } from '../../../infrastructure/users/repositories/user.repository.impl';
import { User } from '../../../domain/users/entities/user.entity';


@Injectable()
export class FindUserUseCase {
  // execute(id: string): string {
  //   return `El ID del Usuario es ${id}`;
  // }
  constructor(private readonly userRepository: UserRepositoryImpl) {}

  async execute(id: number): Promise<User | null> {
    return await this.userRepository.findById(id);
  }
}
