import { Controller, Post, Body, UseFilters } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInRequestDto } from '../auth/dto/signin.request.dto';
import { AuthService } from '../auth/auth.service';
import { HttpExceptionFilter } from '../common/filters/httpException.filter';

@Controller('users')
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  signUp(
    @Body() data: CreateUserDto,
  ): Promise<{ success: boolean; error?: string }> {
    return this.usersService.createUser(data);
  }

  @Post('signin')
  signIn(@Body() data: SignInRequestDto) {
    return this.authService.signIn(data);
  }
}
