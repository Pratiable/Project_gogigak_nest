import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '이메일' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: '비밀번호' })
  @MaxLength(20)
  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: '이름' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: '휴대폰 번호' })
  @IsNotEmpty()
  @Matches(/^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/)
  phoneNumber: string;

  @ApiPropertyOptional({ description: '주소' })
  @IsOptional()
  address?: string;

  @ApiPropertyOptional({ description: '우편번호' })
  @IsOptional()
  zipCode?: string;
}
