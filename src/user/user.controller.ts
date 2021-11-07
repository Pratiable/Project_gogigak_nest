import { Controller, Get, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../common/decorators/user.decorator';
import { User } from '../entities/user.entity';
import { UserService } from './user.service';
import { JwtGuard } from '../auth/jwt/jwt.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserInfoDto } from './dto/user-info.dto';

@ApiBearerAuth('JWT-auth')
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get('me')
  async userInfo(@CurrentUser() user: User): Promise<UserInfoDto> {
    return await this.userService.getUserInfo(user);
  }
}
