import { Module } from '@nestjs/common';
import { UsersModule } from './presentation/users/users.module';
import { ProductsModule } from './presentation/products/product.module';

@Module({
  imports: [UsersModule, ProductsModule],
})
export class AppModule { }
