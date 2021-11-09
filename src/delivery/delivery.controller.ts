import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiDataResponse } from '../common/decorators/api-data-response.decorator';
import { CheckAvailableFreshDeliveryDto } from './dto/check-available-fresh-delivery.dto';
import { DeliveryService } from './delivery.service';
import { CheckAvailableFreshDeliveryRequestDto } from './dto/check-available-fresh-delivery-request.dto';
import { SuccessResponseDto } from '../common/dto/success-response.dto';

@ApiTags('Delivery')
@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}
  @ApiOperation({
    summary: '(권한: 없음) 신선배송 가능여부 확인',
    description: '우편번호로 신선배송 가능여부를 확인할 수 있습니다.',
  })
  @ApiDataResponse(CheckAvailableFreshDeliveryDto)
  @Post('')
  async checkAvailableFreshDelivery(
    @Body() body: CheckAvailableFreshDeliveryRequestDto,
  ): Promise<SuccessResponseDto<any>> {
    const isAvailable = await this.deliveryService.checkAvailableFreshDelivery(
      body.zipCode,
    );
    return new SuccessResponseDto<any>({ data: isAvailable });
  }
}
