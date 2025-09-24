import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../domain/users/entities/user.entity';


@Injectable()
export class CreateUserUseCase {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) { }

  async execute(userData: { nombre: string; email: string }): Promise<User> {
    // Crear entidad a partir del DTO,  Aquí ya no usamos new User(...).
    const user = this.userRepository.create(userData);
    // Guarda el usuario en la base de datos
    return await this.userRepository.save(user);
  }
}
