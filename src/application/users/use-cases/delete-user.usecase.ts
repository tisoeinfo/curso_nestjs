import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../domain/users/entities/user.entity';

@Injectable()
export class DeleteUserUseCase {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async execute(id: number): Promise<void> {
        const result = await this.userRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Usuario con id ${id} no encontrado`);
        }
    }
}
