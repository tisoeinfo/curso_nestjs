import { Controller, Post, Body } from '@nestjs/common';
import { LoginUseCase } from '../../application/auth/use-cases/login.usecase';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly loginUseCase: LoginUseCase
    ) { }

    // El Login valida y devuelve token
    //http://localhost:3000/auth/login
    @Post('login')
    async login(@Body() body: { username: string; password: string }) {
        return this.loginUseCase.execute(body.username, body.password);
    }
}
