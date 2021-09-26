import { UserCoupons } from './../entities/user-coupons.entity';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from '../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private connection: Connection,
  ) {}

  async createUser(
    data: CreateUserDto,
  ): Promise<{ success: boolean; error?: string }> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const checkUser = await queryRunner.manager
      .getRepository(User)
      .findOne({ email: data.email });
    if (checkUser) {
      throw new BadRequestException('ACCOUNT_ALREADY_EXISTS');
    }
    data.password = await bcrypt.hash(data.password, 10);

    try {
      const newUser = await queryRunner.manager.getRepository(User).save(data);
      await queryRunner.manager.getRepository(UserCoupons).save({
        userId: newUser.id,
        couponId: 3,
      });
      await queryRunner.commitTransaction();
      return { success: true };
    } catch {
      await queryRunner.rollbackTransaction();
      return { success: false, error: 'ACCOUNT_ALREADY_EXISTS' };
    } finally {
      await queryRunner.release();
    }
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
