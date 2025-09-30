import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../domain/users/entities/user.entity';

@Injectable()
export class FindUserByUsernameUseCase {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async execute(username: string): Promise<User | null> {
        return await this.userRepository.findOneBy({ username: username });
        // 👆 cambia "nombre" por "username" si tu columna en BD ya se llama así
    }
}
