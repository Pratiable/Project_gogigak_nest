import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from '../entities/address.entity';
import { CheckAvailableFreshDeliveryDto } from './dto/check-available-fresh-delivery.dto';
import { Repository } from 'typeorm';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectRepository(Address) private addressRepository: Repository<Address>,
  ) {}

  async checkAvailableFreshDelivery(
    zipCode: string,
  ): Promise<CheckAvailableFreshDeliveryDto> {
    const isAvailable = !!(await this.addressRepository.findOne({
      where: { zipCode },
    }));
    return new CheckAvailableFreshDeliveryDto(isAvailable);
  }
}
