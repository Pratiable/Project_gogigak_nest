import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInRequestDto } from './dto/sign-in.request.dto';
import { JwtPayload } from './jwt/jwt.payload';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../entities/user.entity';
import { UserCoupons } from '../entities/user-coupons.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { SignInResponseDto } from './dto/sign-in-response.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
    private connection: Connection,
  ) {}

  async createUser(data: CreateUserDto): Promise<void> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const checkUser = await queryRunner.manager
      .getRepository(User)
      .findOne({ where: { email: data.email } });
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
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }

  async signIn(data: SignInRequestDto): Promise<SignInResponseDto> {
    const { email, password } = data;
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('INVALID_USER');
    }

    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      user.password,
    );
    if (!isPasswordValidated) {
      throw new UnauthorizedException('INVALID_USER');
    }

    const payload: JwtPayload = { id: +user.id };
    return new SignInResponseDto(this.jwtService.sign(payload));
  }

  async getUserInfo(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new UnauthorizedException('INVALID_USER');
    }
    return user;
  }
}
