// src/presentation/docs/swagger.config.ts
import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
    .setTitle('API de Usuarios y Productos')
    .setDescription('Documentación automática de los endpoints del sistema')
    .setVersion('1.0')
    .addBearerAuth() // (opcional, si luego agregas Auth)
    .build();