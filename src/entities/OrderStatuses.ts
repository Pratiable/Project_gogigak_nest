import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Orders } from './Orders';

@Entity('order_statuses')
export class OrderStatuses {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'status', length: 20 })
  status: string;

  @OneToMany(() => Orders, (orders) => orders.status)
  orders: Orders[];
}
