import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    fillAll(): string {
        return "Listamos todos los usuarios";
    }

    findOne(id: string): string {
        return `El ID del Usuario es ${id}`;
    }

    create(userData: any): any {
        // return `El usuario creado con nombre es: ${userData.nombre}  y email: ${userData.email}`;
        return {
            usuario_creado: userData.nombre,
            mensaje: "Usuario creado correctamente",
        };

    }

}
