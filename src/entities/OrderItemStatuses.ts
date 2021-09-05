import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderItems } from './OrderItems';

@Entity('order_item_statuses')
export class OrderItemStatuses {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'status', length: 20 })
  status: string;

  @OneToMany(() => OrderItems, (orderItems) => orderItems.status)
  orderItems: OrderItems[];
}
