import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Coupons } from './Coupons';
import { Users } from './Users';

@Index('coupon_id', ['couponId'])
@Index('user_id', ['userId'])
@Entity('user_coupons')
export class UserCoupons {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('bigint', { name: 'coupon_id' })
  couponId: string;

  @Column('bigint', { name: 'user_id' })
  userId: string;

  @ManyToOne(() => Coupons, (coupons) => coupons.userCoupons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'coupon_id', referencedColumnName: 'id' }])
  coupon: Coupons;

  @ManyToOne(() => Users, (users) => users.userCoupons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;
}
