import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CheckAvailableFreshDeliveryRequestDto {
  @ApiProperty({ description: '우편번호' })
  @IsNotEmpty()
  @IsString()
  zipCode: string;
}
