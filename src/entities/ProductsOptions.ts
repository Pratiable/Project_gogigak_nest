import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartItems } from './CartItems';
import { OrderItems } from './OrderItems';
import { Options } from './Options';
import { Products } from './Products';

@Index('options_option_id', ['optionId'])
@Index('options_product_id', ['productId'])
@Entity('products_options')
export class ProductsOptions {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('bigint', { name: 'option_id' })
  optionId: string;

  @Column('bigint', { name: 'product_id' })
  productId: string;

  @OneToMany(() => CartItems, (cartItems) => cartItems.productOptions)
  cartItems: CartItems[];

  @OneToMany(() => OrderItems, (orderItems) => orderItems.productOption)
  orderItems: OrderItems[];

  @ManyToOne(() => Options, (options) => options.productsOptions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'option_id', referencedColumnName: 'id' }])
  option: Options;

  @ManyToOne(() => Products, (products) => products.productsOptions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Products;
}
