import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { ListUsersUseCase } from 'src/application/users/use-cases/list-users.usecase';
import { FindUserUseCase } from 'src/application/users/use-cases/find-user.usecase';
import { CreateUserUseCase } from 'src/application/users/use-cases/create-user.usecase';
import { UpdateUserUseCase } from 'src/application/users/use-cases/update-user.usecase';
import { DeleteUserUseCase } from 'src/application/users/use-cases/delete-user.usecase';
// import { UserRepositoryImpl } from '../../infrastructure/users/repositories/user.repository.impl';
import { User } from 'src/domain/users/entities/user.entity';
import { FindUserByUsernameUseCase } from 'src/application/users/use-cases/find-user-by-username.usecase';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    ListUsersUseCase,
    FindUserUseCase,
    CreateUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    FindUserByUsernameUseCase],
    exports: [FindUserByUsernameUseCase], //  exportamos para que AuthModule lo use
})
export class UsersModule { }
