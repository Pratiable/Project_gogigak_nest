import { ApiProperty } from '@nestjs/swagger';

interface Success<T> {
  readonly data?: T;
  readonly list?: Array<T> | T;
  readonly message?: string;
}

export class BaseResponse {
  @ApiProperty({ description: 'Status Code', default: 200 })
  statusCode: number;

  @ApiProperty({ description: 'Message', default: 'success' })
  message: string;
}

export class SuccessResponseDto<T> extends BaseResponse {
  readonly data?: T;
  readonly list?: Array<T> | T;

  constructor(data?: Success<T>) {
    super();
    this.statusCode = 200;
    this.message = data?.message ?? 'success';
    this.data = data?.data;
    this.list = data?.list;
  }
}
