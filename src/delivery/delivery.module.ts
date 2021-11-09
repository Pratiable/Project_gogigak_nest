import { Module } from '@nestjs/common';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from '../entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}
