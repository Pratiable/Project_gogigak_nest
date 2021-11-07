import { ApiProperty } from '@nestjs/swagger';
import * as dayjs from 'dayjs';

export class OrderListDto {
  @ApiProperty({ description: '주문 번호' })
  orderNumber: number;

  @ApiProperty({ description: '주문 요약' })
  orderSummary: string;

  @ApiProperty({ description: '주문 수량' })
  totalAmount: number;

  @ApiProperty({ description: '총 가격' })
  totalPrice: number;

  @ApiProperty({ description: '배송 날짜' })
  deliveryDate: string;

  constructor(order: any) {
    this.orderNumber = +order.orderNumber;
    this.orderSummary = order.orderSummary;
    this.totalAmount = +order.totalAmount;
    this.totalPrice = +order.totalPrice;
    this.deliveryDate = dayjs(order.deliveryDate).format('YYYY-MM-DD');
  }
}
