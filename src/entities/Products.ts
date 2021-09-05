import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Images } from './Images';
import { Categories } from './Categories';
import { ProductsOptions } from './ProductsOptions';
import { Reviews } from './Reviews';

@Index('category_id', ['categoryId'])
@Entity('products')
export class Products {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @Column('date', { name: 'butchered_date' })
  butcheredDate: string;

  @Column('decimal', { name: 'price', precision: 10, scale: 2 })
  price: string;

  @Column('decimal', { name: 'grams', precision: 10, scale: 2 })
  grams: string;

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
  categoryId: string;

  @OneToMany(() => Images, (images) => images.product)
  images: Images[];

  @ManyToOne(() => Categories, (categories) => categories.products, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'category_id', referencedColumnName: 'id' }])
  category: Categories;

  @OneToMany(
    () => ProductsOptions,
    (productsOptions) => productsOptions.product,
  )
  productsOptions: ProductsOptions[];

  @OneToMany(() => Reviews, (reviews) => reviews.product)
  productReviews: Reviews[];
}
