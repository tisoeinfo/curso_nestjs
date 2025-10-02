import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
    constructor() {
        // Si falla → responde 401 Unauthorized y no llega a tu controlador., esto valida si el token esta ok o no
        super({
            //Passport extrae el token con la regla que definiste en super(...)
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // Revisa expiración
            ignoreExpiration: false,
            secretOrKey: 'mi_secreto_super_seguro', //  también debe ir en .env
        });
    }

    //Recibe ese payload y tú defines qué devolver:Aquí decides qué partes del payload quieres conservar en req.user.
    async validate(payload: any) {
        console.log('Entró a validate() con payload:', payload);
        return {
            id: payload.id,  
            username: payload.username
        }
    }
}
