import { Controller, Get, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../common/decorators/user.decorator';
import { User } from '../entities/user.entity';
import { UserService } from './user.service';
import { JwtGuard } from '../auth/jwt/jwt.guard';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserInfoDto } from './dto/user-info.dto';
import { ApiDataResponse } from '../common/decorators/api-data-response.decorator';

@ApiBearerAuth('JWT-auth')
@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: '(권한: 일반) 마이페이지',
    description: '현재 유저의 마이페이지 정보를 확인할 수 있습니다.',
  })
  @ApiDataResponse(UserInfoDto)
  @UseGuards(JwtGuard)
  @Get('me')
  async userInfo(@CurrentUser() user: User): Promise<UserInfoDto> {
    return await this.userService.getUserInfo(user);
  }
}
