import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';

@Index('product_id', ['productId'])
@Index('user_id', ['userId'])
@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('varchar', { name: 'image_url', nullable: true, length: 2000 })
  imageUrl: string | null;

  @Column('varchar', { name: 'title', length: 100 })
  title: string;

  @Column('varchar', { name: 'content', length: 1000 })
  content: string;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('bigint', { name: 'product_id' })
  productId: number;

  @Column('bigint', { name: 'user_id' })
  userId: number;

  @ManyToOne(() => Product, (products) => products.productReviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => User, (users) => users.reviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
