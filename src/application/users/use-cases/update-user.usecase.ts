import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../domain/users/entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UpdateUserUseCase {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async execute(id: number, userData: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`Usuario con id ${id} no encontrado`);
        }

        // Actualizamos solo lo que se haya enviado
        Object.assign(user, userData);

        return await this.userRepository.save(user);
    }
}
