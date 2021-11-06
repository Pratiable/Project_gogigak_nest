import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SuccessResponseDto } from '../common/dto/success-response.dto';
import { SignInRequestDto } from './dto/sign-in.request.dto';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { ApiBaseResponse } from '../common/decorators/api-base-response.decorator';

@ApiBearerAuth('JWT-auth')
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: '(권한: 없음) 회원 가입',
    description: '회원 가입을 할 수 있습니다.',
  })
  @Post('signup')
  @ApiBaseResponse()
  async signUp(@Body() data: CreateUserDto): Promise<SuccessResponseDto<any>> {
    await this.authService.createUser(data);
    return new SuccessResponseDto<any>();
  }

  @ApiOperation({
    summary: '(권한: 없음) 로그인',
    description: '로그인을 할 수 있습니다.',
  })
  @ApiResponse({ status: 200, description: 'Success', type: SignInResponseDto })
  @HttpCode(200)
  @Post('signin')
  async signIn(
    @Body() data: SignInRequestDto,
  ): Promise<SuccessResponseDto<any>> {
    const token = await this.authService.signIn(data);
    return new SuccessResponseDto<any>({ data: token });
  }
}
