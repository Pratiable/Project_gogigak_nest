import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity('order_statuses')
export class OrderStatus {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('varchar', { name: 'status', length: 20 })
  status: string;

  @OneToMany(() => Order, (orders) => orders.status)
  orders: Order[];
}
