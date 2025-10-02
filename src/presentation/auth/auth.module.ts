import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LoginUseCase } from '../../application/auth/use-cases/login.usecase';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'mi_secreto_super_seguro', // 🔑 mejor ponerlo en .env
      signOptions: { expiresIn: '1h' }, // el token expira en 1 hora
    }),
    UsersModule, // 👈 Necesario porque usamos FindUserByUsernameUseCase y lo hago es importarlo porque del otro lado lo estan exportarlo
  ],
  controllers: [AuthController],
  providers:
    [
      LoginUseCase,
      // FindUserByUsernameUseCase -> esto ya no es necesario declararlo porque el imports ya lo tiene incluido
      JwtStrategy
    ],

})
export class AuthModule { }
