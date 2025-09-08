import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ListUsersUseCase } from '../../application/users/use-cases/list-users.usecase';
import { FindUserUseCase } from '../../application/users/use-cases/find-user.usecase';
import { CreateUserUseCase } from '../../application/users/use-cases/create-user.usecase';

@Controller('users')
export class UsersController {

    // constructor(private readonly userService: UsersService) { }
    constructor(
        private readonly listUsersUseCase: ListUsersUseCase,
        private readonly findUserUseCase: FindUserUseCase,
        private readonly createUserUseCase: CreateUserUseCase,

    ) { }
    @Get()
    findAll(): string {
        return this.listUsersUseCase.execute();
    }

    //http://localhost:3000/users/10
    @Get(':id')
    findOne(@Param('id') id: string): string {
        return this.findUserUseCase.execute(id);
    }

    @Post()
    create(@Body() body: any): any {
        return this.createUserUseCase.execute(body);
    }

}
