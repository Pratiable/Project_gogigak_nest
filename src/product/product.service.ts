import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { ProductListResponseDto } from './dto/product-list-response.dto';
import { ProductListRequestDto } from './dto/product-list-request.dto';
import { Category } from '../entities/category.entity';
import { Option } from '../entities/option.entity';
import { ProductListItemDto } from './dto/product-list-item.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Option) private optionRepository: Repository<Option>,
  ) {}

  async productList(
    query: ProductListRequestDto,
  ): Promise<ProductListResponseDto> {
    const sortOptions = {
      id: ['product.id', 'ASC'],
      sales: ['product.sales', 'ASC'],
      reviews: ['product.review', 'ASC'],
      'price-desc': ['product.price', 'DESC'],
      'price-asc': ['product.price', 'ASC'],
    };
    const category = query.category;
    const sort = sortOptions[query.sort];
    const result = new ProductListResponseDto();

    const getCategory = await this.categoryRepository.findOne({
      where: { name: category },
    });
    result.categoryImage = getCategory.image;

    const products = this.productRepository
      .createQueryBuilder('product')
      .select([
        'product.id',
        'product.name',
        'product.price',
        'product.grams',
        'product.thumbnail',
        'product.isOrganic',
        'product.sales',
        'product.reviews',
        'product.stock',
      ])
      .orderBy(sort[0], sort[1])
      .innerJoinAndSelect('product.productsOptions', 'productsOptions')
      .innerJoinAndSelect('productsOptions.option', 'options');

    if (category !== 'all') {
      products.where('product.categoryId = :id', { id: getCategory.id });
    }

    const getOptionFromProduct = (await products.getMany()).map((el) => {
      el['options'] = el.productsOptions.map((item) => {
        item.option.id = +item.option.id;
        return item.option;
      });
      delete el.productsOptions;
      return el;
    });

    result.products = getOptionFromProduct.map(
      (el) => new ProductListItemDto(el),
    );
    return result;
  }
}
