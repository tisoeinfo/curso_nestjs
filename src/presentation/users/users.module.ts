import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ListUsersUseCase } from 'src/application/users/use-cases/list-users.usecase';
import { FindUserUseCase } from 'src/application/users/use-cases/find-user.usecase';
import { CreateUserUseCase } from 'src/application/users/use-cases/create-user.usecase';
import { UserRepositoryImpl } from '../../infrastructure/users/repositories/user.repository.impl';


@Module({
  controllers: [UsersController],
  providers: [
    ListUsersUseCase,
    FindUserUseCase,
    CreateUserUseCase,
    UserRepositoryImpl],
})
export class UsersModule { }
