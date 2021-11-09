import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DeliveryModule } from './delivery/delivery.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import * as ormconfig from 'ormconfig';
import { HttpExceptionFilter } from './common/filters/httpException.filter';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    AuthModule,
    DeliveryModule,
    CategoryModule,
    ProductModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
