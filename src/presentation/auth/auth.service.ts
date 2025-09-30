import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { FindUserByUsernameUseCase } from '../../application/users/use-cases/find-user-by-username.usecase';


@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly findUserByUsername: FindUserByUsernameUseCase, // 👈 lo inyectamos
    ) { }


    async login(username: string, password: string) {
        // Buscar usuario por username
        const user = await this.findUserByUsername.execute(username);
        if (!user) {
            throw new UnauthorizedException('Usuario no encontrado');
        }

        // Validar contraseña
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        // Firmar token
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
