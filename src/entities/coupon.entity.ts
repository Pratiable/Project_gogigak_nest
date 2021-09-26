import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';
import { UserCoupons } from './user-coupons.entity';

@Entity('coupons')
export class Coupon {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 100 })
  name: string;

  @Column('int', { name: 'value' })
  value: number;

  @OneToMany(() => Order, (orders) => orders.coupon)
  orders: Order[];

  @OneToMany(() => UserCoupons, (userCoupons) => userCoupons.coupon)
  userCoupons: UserCoupons[];
}
