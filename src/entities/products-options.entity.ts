import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartItem } from './cart-item.entity';
import { OrderItem } from './order-item.entity';
import { Option } from './option.entity';
import { Product } from './product.entity';

@Index('options_option_id', ['optionId'])
@Index('options_product_id', ['productId'])
@Entity('products_options')
export class ProductsOptions {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('bigint', { name: 'option_id' })
  optionId: number;

  @Column('bigint', { name: 'product_id' })
  productId: number;

  @OneToMany(() => CartItem, (cartItems) => cartItems.productOptions)
  cartItems: CartItem[];

  @OneToMany(() => OrderItem, (orderItems) => orderItems.productOption)
  orderItems: OrderItem[];

  @ManyToOne(() => Option, (options) => options.productsOptions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'option_id', referencedColumnName: 'id' }])
  option: Option;

  @ManyToOne(() => Product, (products) => products.productsOptions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;
}
