import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Orders } from './Orders';
import { ProductsOptions } from './ProductsOptions';
import { OrderItemStatuses } from './OrderItemStatuses';

@Index('order_id', ['orderId'])
@Index('product_option_id', ['productOptionId'])
@Index('status_id', ['statusId'])
@Entity('order_items')
export class OrderItems {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'quantity' })
  quantity: number;

  @Column('bigint', { name: 'order_id' })
  orderId: string;

  @Column('bigint', { name: 'product_option_id', nullable: true })
  productOptionId: string | null;

  @Column('bigint', { name: 'status_id', nullable: true })
  statusId: string | null;

  @ManyToOne(() => Orders, (orders) => orders.orderItems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'order_id', referencedColumnName: 'id' }])
  order: Orders;

  @ManyToOne(
    () => ProductsOptions,
    (productsOptions) => productsOptions.orderItems,
    { onDelete: 'SET NULL' },
  )
  @JoinColumn([{ name: 'product_option_id', referencedColumnName: 'id' }])
  productOption: ProductsOptions;

  @ManyToOne(
    () => OrderItemStatuses,
    (orderItemStatuses) => orderItemStatuses.orderItems,
    { onDelete: 'SET NULL' },
  )
  @JoinColumn([{ name: 'status_id', referencedColumnName: 'id' }])
  status: OrderItemStatuses;
}
