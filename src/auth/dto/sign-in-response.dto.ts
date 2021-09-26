import { SuccessResponseDto } from '../../common/dto/success-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class SignInResponseDto extends SuccessResponseDto<any> {
  @ApiProperty({ description: 'Token' })
  token: string;

  constructor(token: string) {
    super();
    this.token = token;
  }
}
