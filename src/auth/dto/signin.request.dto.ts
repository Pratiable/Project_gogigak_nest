import { PickType } from '@nestjs/mapped-types';
import { User } from '../../entities/user.entity';

export class SignInRequestDto extends PickType(User, [
  'email',
  'password',
] as const) {}
