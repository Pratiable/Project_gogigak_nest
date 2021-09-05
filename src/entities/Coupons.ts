import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Orders } from './Orders';
import { UserCoupons } from './UserCoupons';

@Entity('coupons')
export class Coupons {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', length: 100 })
  name: string;

  @Column('int', { name: 'value' })
  value: number;

  @OneToMany(() => Orders, (orders) => orders.coupon)
  orders: Orders[];

  @OneToMany(() => UserCoupons, (userCoupons) => userCoupons.coupon)
  userCoupons: UserCoupons[];
}
