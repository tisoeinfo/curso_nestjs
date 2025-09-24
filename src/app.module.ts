import { Module } from '@nestjs/common';
import { UsersModule } from './presentation/users/users.module';
import { ProductsModule } from './presentation/products/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/users/entities/user.entity';

@Module({

  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Q-Y_3BAgu2CF',
      database: 'backend_clean',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    ProductsModule],

})
export class AppModule { }
