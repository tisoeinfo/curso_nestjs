import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ListUsersUseCase } from '../../application/users/use-cases/list-users.usecase';
import { FindUserUseCase } from '../../application/users/use-cases/find-user.usecase';
import { CreateUserUseCase } from '../../application/users/use-cases/create-user.usecase';
import { CreateUserDto } from '../../application/users/dto/create-user.dto';
import { User } from '../../domain/users/entities/user.entity';

@Controller('users')
export class UsersController {

    // constructor(private readonly userService: UsersService) { }
    constructor(
        private readonly listUsersUseCase: ListUsersUseCase,
        private readonly findUserUseCase: FindUserUseCase,
        private readonly createUserUseCase: CreateUserUseCase,

    ) { }

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

    // @Body() body: CreateUserDto → NestJS agarra el JSON que envías en el POST y lo convierte en un objeto del tipo CreateUserDto.
    // Promise<User> → promete devolver un User creado.
    @Post()
    async create(@Body() body: CreateUserDto): Promise<User> {
        return await this.createUserUseCase.execute(body);
    }

}
