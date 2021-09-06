import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Coupon } from './coupon.entity';
import { User } from './user.entity';

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

  @ManyToOne(() => Coupon, (coupons) => coupons.userCoupons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'coupon_id', referencedColumnName: 'id' }])
  coupon: Coupon;

  @ManyToOne(() => User, (users) => users.userCoupons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
