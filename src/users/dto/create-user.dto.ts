import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MaxLength(20)
  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Matches(/^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/)
  phoneNumber: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  zipCode?: string;
}
