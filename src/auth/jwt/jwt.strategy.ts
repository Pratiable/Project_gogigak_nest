import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './jwt.payload';
import { User } from '../../entities/user.entity';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      ignoreExpiration: false,
    });
  }

  async validate(jwtPayload: JwtPayload): Promise<User> {
    const user = await this.authService.getUserInfo(jwtPayload.id);
    if (!user) {
      throw new UnauthorizedException('INVALID_USER');
    }
    return user;
  }
}
