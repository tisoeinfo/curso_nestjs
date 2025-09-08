import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserUseCase {
  execute(userData: any): any {
    return {
      usuario_creado: userData.nombre,
      mensaje: "Usuario creado correctamente",
    };
  }
}
