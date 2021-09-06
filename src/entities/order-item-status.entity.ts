import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderItem } from './order-item.entity';

@Entity('order_item_statuses')
export class OrderItemStatus {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'status', length: 20 })
  status: string;

  @OneToMany(() => OrderItem, (orderItems) => orderItems.status)
  orderItems: OrderItem[];
}
