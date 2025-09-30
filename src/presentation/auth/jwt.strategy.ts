import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'mi_secreto_super_seguro', // 🔑 también debe ir en .env
        });
    }

    async validate(payload: any) {
        console.log('Entró a validate() con payload:', payload);
        return {
            id: Number(payload.sub),  // ✅ forzamos que siempre sea número
            username: payload.username
        }
    }
}
