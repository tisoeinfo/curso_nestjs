import { Injectable } from '@nestjs/common';
import { UserRepositoryImpl } from '../../../infrastructure/users/repositories/user.repository.impl';
import { User } from '../../../domain/users/entities/user.entity';


@Injectable()
export class CreateUserUseCase {
  // execute(userData: any): any {
  //   return {
  //     usuario_creado: userData.nombre,
  //     mensaje: "Usuario creado correctamente",
  //   };
  // }

 constructor(private readonly userRepository: UserRepositoryImpl) {}

  async execute(userData: { nombre: string; email: string }): Promise<User> {
    const user = new User(0, userData.nombre, userData.email);
    return await this.userRepository.create(user);
  }
}
