import { ApiProperty } from '@nestjs/swagger';

export class CheckAvailableFreshDeliveryDto {
  @ApiProperty({ description: '신선배송 가능여부' })
  isAvailable: boolean;

  constructor(isAvailable: boolean) {
    this.isAvailable = isAvailable;
  }
}
