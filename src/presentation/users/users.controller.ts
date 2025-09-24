import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ListUsersUseCase } from '../../application/users/use-cases/list-users.usecase';
import { FindUserUseCase } from '../../application/users/use-cases/find-user.usecase';
import { CreateUserUseCase } from '../../application/users/use-cases/create-user.usecase';
import { UpdateUserUseCase } from '../../application/users/use-cases/update-user.usecase';
import { CreateUserDto } from '../../application/users/dto/create-user.dto';
import { UpdateUserDto } from '../../application/users/dto/update-user.dto';
import { DeleteUserUseCase } from '../../application/users/use-cases/delete-user.usecase';
import { User } from '../../domain/users/entities/user.entity';

@Controller('users')
export class UsersController {

    // constructor(private readonly userService: UsersService) { }
    constructor(
        private readonly listUsersUseCase: ListUsersUseCase,
        private readonly findUserUseCase: FindUserUseCase,
        private readonly createUserUseCase: CreateUserUseCase,
        private readonly updateUserUseCase: UpdateUserUseCase,
        private readonly deleteUserUseCase: DeleteUserUseCase,


    ) { }

    // @Body() body: CreateUserDto → NestJS agarra el JSON que envías en el POST y lo convierte en un objeto del tipo CreateUserDto.
    // Promise<User> → promete devolver un User creado.
    @Post()
    async create(@Body() body: CreateUserDto): Promise<User> {
        return await this.createUserUseCase.execute(body);
    }

    //http://localhost:3000/users
    @Get()
    async findAll(): Promise<User[]> {
        return await this.listUsersUseCase.execute();
    }

    //http://localhost:3000/users/10
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User | null> {
        return await this.findUserUseCase.execute(Number(id)); // Convertimos string → number

    }

    //http://localhost:3000/users/1 
    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() body: UpdateUserDto,
    ): Promise<User> {
        return await this.updateUserUseCase.execute(Number(id), body);
    }


    @Delete(':id')
    async delete(@Param('id') id: string): Promise<{ message: string }> {
        await this.deleteUserUseCase.execute(Number(id));
        return { message: `Usuario con id ${id} eliminado correctamente` };
    }


}
