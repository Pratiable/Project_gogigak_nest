import { Option } from '../../entities/option.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ProductListItemDto {
  @ApiProperty({ description: '제품 id' })
  id: number;

  @ApiProperty({ description: '제품명' })
  name: string;

  @ApiProperty({ description: '제품 가격' })
  price: number;

  @ApiProperty({ description: '제품 무게' })
  grams: number;

  @ApiProperty({ description: '썸네일' })
  thumbnail: string;

  @ApiProperty({ description: '무항생제 여부' })
  isOrganic: boolean;

  @ApiProperty({ description: '판매량' })
  sales: number;

  @ApiProperty({ description: '리뷰 갯수' })
  reviews: number;

  @ApiProperty({ description: '제품 옵션 ({id: number, name: string})' })
  options: Option[];

  @ApiProperty({ description: '재고량' })
  stock: number;

  constructor(product: any) {
    this.id = +product.id;
    this.name = product.name;
    this.price = +product.price;
    this.grams = +product.grams;
    this.thumbnail = product.thumbnail;
    this.isOrganic = product.isOrganic;
    this.sales = product.sales;
    this.reviews = product.reviews;
    this.options = product.options;
    this.stock = product.stock;
  }
}
