import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './domain/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './presentation/products/products.module';
import { UsersModule } from './presentation/users/users.module';
import { AuthModule } from './presentation/auth/auth.module';

@Module({

  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // variables disponibles en toda la app
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        entities: [User],
        synchronize: true,
      }),
    }),
    ProductsModule,
    UsersModule,
    AuthModule],

})
export class AppModule { }
