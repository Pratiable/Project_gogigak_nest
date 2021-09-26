import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Index('products_id', ['productId'], {})
@Entity('images')
export class Image {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('varchar', { name: 'image_url', length: 2000 })
  imageUrl: string;

  @Column('int', { name: 'sequence' })
  sequence: number;

  @Column('bigint', { name: 'product_id' })
  productId: number;

  @ManyToOne(() => Product, (products) => products.images, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;
}
