import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { FindUserByUsernameUseCase } from '../../users/use-cases/find-user-by-username.usecase';

@Injectable()
export class LoginUseCase {
    constructor(
        private readonly jwtService: JwtService,
        private readonly findUserByUsername: FindUserByUsernameUseCase,
    ) { }

    async execute(username: string, password: string) {
        // Buscar usuario por username, esto devuelve un objeto 
        const user = await this.findUserByUsername.execute(username);
        if (!user) {
            throw new UnauthorizedException('Usuario no encontrado');
        }

        // Validar contraseña
        // devuelve una promesa booleana:true o false
        const isPasswordValid = await bcrypt.compare(password, user.password);
        //si no coinciden o sea si es falso entra, porque esta negando que sea verdadero

        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        /* Este es el “JSON original” que vivirá dentro del token (más iat y exp que agrega JWT)..
            {
            "sub": 1,
            "username": "saul"
            }
          */
        const payload = { id: user.id, username: user.username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
