import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductListRequestDto } from './dto/product-list-request.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiListResponse } from '../common/decorators/api-list-response.decorator';
import { ProductListResponseDto } from './dto/product-list-response.dto';
import { ApiDataResponse } from '../common/decorators/api-data-response.decorator';
import { ProductListItemDto } from './dto/product-list-item.dto';

@ApiTags('Product')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({
    summary: '(권한: 없음) 제품 목록',
    description: '제품 목록을 확인할 수 있습니다.',
  })
  @ApiListResponse(ProductListResponseDto)
  @ApiDataResponse(ProductListItemDto)
  @Get('list')
  async productList(@Query() query: ProductListRequestDto) {
    return await this.productService.productList(query);
  }
}
