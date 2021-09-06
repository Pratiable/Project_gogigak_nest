import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(data: CreateUserDto) {
    const checkUser = await this.userRepository.findOne({ email: data.email });
    if (checkUser) {
      throw new BadRequestException('ACCOUNT_ALREADY_EXISTS');
    }

    data.password = await bcrypt.hash(data.password, 10);
    await this.userRepository.save(data);
  }

  async findUserById(id: number): Promise<User | null> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new UnauthorizedException('INVALID_USER');
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('INVALID_USER');
    }

    return user;
  }
}
