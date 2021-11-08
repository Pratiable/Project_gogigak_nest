import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';
import { Address } from '../entities/address.entity';
import { UserCoupons } from '../entities/user-coupons.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Order, Address, UserCoupons])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
