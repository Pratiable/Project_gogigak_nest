import { ProductListItemDto } from './product-list-item.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ProductListResponseDto {
  @ApiProperty({ description: '카테고리 이미지' })
  categoryImage: string;

  @ApiProperty({ description: '제품 정보 (ProductListItemDto)' })
  products: ProductListItemDto[];
}
