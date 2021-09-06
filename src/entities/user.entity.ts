import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartItem } from './cart-item.entity';
import { Order } from './order.entity';
import { Review } from './review.entity';
import { UserCoupons } from './user-coupons.entity';

@Index('email', ['email'], { unique: true })
@Index('phone_number', ['phoneNumber'], { unique: true })
@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'email', unique: true, length: 100 })
  email: string;

  @Column('varchar', { name: 'password', length: 200 })
  password: string;

  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @Column('varchar', { name: 'phone_number', unique: true, length: 20 })
  phoneNumber: string;

  @Column('int', { name: 'point', default: 0 })
  point: number;

  @Column('varchar', { name: 'address', nullable: true, length: 300 })
  address: string | null;

  @Column('varchar', { name: 'zip_code', nullable: true, length: 20 })
  zipCode: string | null;

  @OneToMany(() => CartItem, (cartItems) => cartItems.user)
  cartItems: CartItem[];

  @OneToMany(() => Order, (orders) => orders.user)
  orders: Order[];

  @OneToMany(() => Review, (reviews) => reviews.user)
  reviews: Review[];

  @OneToMany(() => UserCoupons, (userCoupons) => userCoupons.user)
  userCoupons: UserCoupons[];
}
