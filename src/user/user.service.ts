import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { Address } from '../entities/address.entity';
import { Order } from '../entities/order.entity';
import { UserInfoDto } from './dto/user-info.dto';
import { OrderItem } from '../entities/order-item.entity';
import { Product } from '../entities/product.entity';
import { ProductsOptions } from '../entities/products-options.entity';
import { OrderListDto } from './dto/order-list.dto';
import { UserCoupons } from '../entities/user-coupons.entity';
import { Coupon } from '../entities/coupon.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Address) private addressRepository: Repository<Address>,
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(UserCoupons)
    private userCouponRepository: Repository<UserCoupons>,
  ) {}

  async getUserInfo(user: User): Promise<UserInfoDto> {
    const result = new UserInfoDto(user);
    result.isFreshDeliveryAvailable = !!(await this.addressRepository.findOne({
      where: { zipCode: user.zipCode },
    }));
    const orders = await this.orderRepository
      .createQueryBuilder('orders')
      .select([
        'orders.id AS orderNumber',
        'orders.total_price AS totalPrice',
        'orders.delivery_date AS deliveryDate',
        'product.name AS orderSummary',
      ])
      .addSelect((qb) => {
        return qb
          .select('COUNT(*)')
          .from(OrderItem, 'orderItem')
          .where('orderItem.orderId = orders.id')
          .groupBy('orderItem.orderId');
      }, 'totalAmount')
      .leftJoin(OrderItem, 'orderItems', 'orderItems.order_id = orders.id')
      .leftJoin(
        ProductsOptions,
        'productOptions',
        'productOptions.id = orderItems.productOptionId',
      )
      .leftJoin(Product, 'product', 'product.id = productOptions.productId')
      .groupBy('orders.id')
      .where('orders.user_id = :id', { id: user.id })
      .getRawMany();
    result.orderList = orders.map((el) => new OrderListDto(el));

    result.coupons = await this.userCouponRepository
      .createQueryBuilder('userCoupon')
      .select([
        'coupon.id AS id',
        'coupon.name AS name',
        'coupon.value AS value',
      ])
      .innerJoin(Coupon, 'coupon', 'coupon.id = userCoupon.coupon.id')
      .where('userCoupon.userId = :id', { id: user.id })
      .getRawMany();

    return result;
  }
}
