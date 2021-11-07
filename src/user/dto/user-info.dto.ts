import { Coupon } from '../../entities/coupon.entity';
import { ApiProperty } from '@nestjs/swagger';
import { OrderListDto } from './order-list.dto';
import { User } from '../../entities/user.entity';

export class UserInfoDto {
  @ApiProperty({ description: '유저 이름' })
  name: string;

  @ApiProperty({ description: '포인트' })
  point: number;

  @ApiProperty({ description: '쿠폰 갯수' })
  couponCount: number;

  @ApiProperty({ description: '유저 번호' })
  userNumber: number;

  @ApiProperty({ description: '주문 갯수' })
  orderCount: number;

  @ApiProperty({ description: '신선배송 가능 여부' })
  isFreshDeliveryAvailable: boolean;

  @ApiProperty({ description: '주문 내역' })
  orderList: OrderListDto[];

  @ApiProperty({ description: '쿠폰' })
  coupons: Coupon[];

  constructor(user: User) {
    this.name = user.name;
    this.point = user.point;
    this.userNumber = +user.id;
  }
}
