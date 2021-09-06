import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductsOptions } from './products-options.entity';
import { User } from './user.entity';

@Index('products_options_id', ['productOptionsId'])
@Index('user_id', ['userId'], {})
@Entity('cart_items')
export class CartItem {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'quantity' })
  quantity: number;

  @Column('bigint', { name: 'product_options_id' })
  productOptionsId: string;

  @Column('bigint', { name: 'user_id' })
  userId: string;

  @ManyToOne(
    () => ProductsOptions,
    (productsOptions) => productsOptions.cartItems,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'product_options_id', referencedColumnName: 'id' }])
  productOptions: ProductsOptions;

  @ManyToOne(() => User, (users) => users.cartItems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
