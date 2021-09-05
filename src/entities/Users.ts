import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartItems } from './CartItems';
import { Orders } from './Orders';
import { Reviews } from './Reviews';
import { UserCoupons } from './UserCoupons';

@Index('email', ['email'], { unique: true })
@Index('phone_number', ['phoneNumber'], { unique: true })
@Entity('users')
export class Users {
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

  @Column('int', { name: 'point' })
  point: number;

  @Column('varchar', { name: 'address', nullable: true, length: 300 })
  address: string | null;

  @Column('varchar', { name: 'zip_code', nullable: true, length: 20 })
  zipCode: string | null;

  @OneToMany(() => CartItems, (cartItems) => cartItems.user)
  cartItems: CartItems[];

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[];

  @OneToMany(() => Reviews, (reviews) => reviews.user)
  reviews: Reviews[];

  @OneToMany(() => UserCoupons, (userCoupons) => userCoupons.user)
  userCoupons: UserCoupons[];
}
