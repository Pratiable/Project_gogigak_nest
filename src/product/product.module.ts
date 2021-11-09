import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Category } from '../entities/category.entity';
import { Option } from '../entities/option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, Option])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
