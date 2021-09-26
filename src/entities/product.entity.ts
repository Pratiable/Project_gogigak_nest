import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from './image.entity';
import { Category } from './category.entity';
import { ProductsOptions } from './products-options.entity';
import { Review } from './review.entity';

@Index('category_id', ['categoryId'])
@Entity('products')
export class Product {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @Column('date', { name: 'butchered_date' })
  butcheredDate: string;

  @Column('decimal', { name: 'price', precision: 10, scale: 2 })
  price: number;

  @Column('decimal', { name: 'grams', precision: 10, scale: 2 })
  grams: number;

  @Column('tinyint', { name: 'is_organic', width: 1 })
  isOrganic: boolean;

  @Column('int', { name: 'sales' })
  sales: number;

  @Column('int', { name: 'reviews' })
  reviews: number;

  @Column('varchar', { name: 'thumbnail', length: 2000 })
  thumbnail: string;

  @Column('int', { name: 'stock' })
  stock: number;

  @Column('bigint', { name: 'category_id' })
  categoryId: number;

  @OneToMany(() => Image, (images) => images.product)
  images: Image[];

  @ManyToOne(() => Category, (categories) => categories.products, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'category_id', referencedColumnName: 'id' }])
  category: Category;

  @OneToMany(
    () => ProductsOptions,
    (productsOptions) => productsOptions.product,
  )
  productsOptions: ProductsOptions[];

  @OneToMany(() => Review, (reviews) => reviews.product)
  productReviews: Review[];
}
