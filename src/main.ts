import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger'; // importa Swagger
import { swaggerConfig } from './presentation/docs/swagger.config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // validaciones globales para el envio de POST
  app.useGlobalPipes(new ValidationPipe());

  // Configuración Swagger
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 Servidor corriendo en http://localhost:3000`);
  console.log(`📘 Swagger disponible en http://localhost:3000/docs`);
}
bootstrap();
