import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInRequestDto } from './dto/signin.request.dto';
import { JwtPayload } from './jwt/jwt.payload';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(data: SignInRequestDto) {
    const { email, password } = data;
    const user = await this.usersService.findUserByEmail(email);
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
    return { token: this.jwtService.sign(payload) };
  }
}
