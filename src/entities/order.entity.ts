import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Coupon } from './coupon.entity';
import { OrderStatus } from './order-status.entity';
import { User } from './user.entity';
import { OrderItem } from './order-item.entity';

@Index('status_id', ['statusId'])
@Index('user_id', ['userId'])
@Index('coupon_id', ['couponId'])
@Entity('orders')
export class Order {
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

  @ManyToOne(() => Coupon, (coupons) => coupons.orders, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'coupon_id', referencedColumnName: 'id' }])
  coupon: Coupon;

  @ManyToOne(() => OrderStatus, (orderStatuses) => orderStatuses.orders, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'status_id', referencedColumnName: 'id' }])
  status: OrderStatus;

  @ManyToOne(() => User, (users) => users.orders, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @OneToMany(() => OrderItem, (orderItems) => orderItems.order)
  orderItems: OrderItem[];
}
