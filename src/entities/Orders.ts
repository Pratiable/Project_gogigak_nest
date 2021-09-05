import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Coupons } from './Coupons';
import { OrderStatuses } from './OrderStatuses';
import { Users } from './Users';
import { OrderItems } from './OrderItems';

@Index('status_id', ['statusId'])
@Index('user_id', ['userId'])
@Index('coupon_id', ['couponId'])
@Entity('orders')
export class Orders {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('date', { name: 'delivery_date' })
  deliveryDate: string;

  @Column('varchar', { name: 'recipient', length: 30 })
  recipient: string;

  @Column('varchar', { name: 'phone_number', length: 30 })
  phoneNumber: string;

  @Column('varchar', { name: 'address', length: 300 })
  address: string;

  @Column('int', { name: 'point' })
  point: number;

  @Column('decimal', { name: 'delivery_fee', precision: 10, scale: 2 })
  deliveryFee: string;

  @Column('date', { name: 'created_at' })
  createdAt: string;

  @Column('int', { name: 'total_price' })
  totalPrice: number;

  @Column('bigint', { name: 'coupon_id', nullable: true })
  couponId: string | null;

  @Column('bigint', { name: 'status_id', nullable: true })
  statusId: string | null;

  @Column('bigint', { name: 'user_id', nullable: true })
  userId: string | null;

  @ManyToOne(() => Coupons, (coupons) => coupons.orders, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'coupon_id', referencedColumnName: 'id' }])
  coupon: Coupons;

  @ManyToOne(() => OrderStatuses, (orderStatuses) => orderStatuses.orders, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'status_id', referencedColumnName: 'id' }])
  status: OrderStatuses;

  @ManyToOne(() => Users, (users) => users.orders, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;

  @OneToMany(() => OrderItems, (orderItems) => orderItems.order)
  orderItems: OrderItems[];
}
