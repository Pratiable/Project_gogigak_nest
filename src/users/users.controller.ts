import {
  Controller,
  Post,
  Body,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInRequestDto } from '../auth/dto/signin.request.dto';
import { AuthService } from '../auth/auth.service';
import { HttpExceptionFilter } from '../common/filters/httpException.filter';
import { SuccessInterceptor } from '../common/interceptors/success.interceptor';

@Controller('users')
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  @UseInterceptors(SuccessInterceptor)
  signUp(@Body() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

  @Post('signin')
  signIn(@Body() data: SignInRequestDto) {
    return this.authService.signIn(data);
  }
}
