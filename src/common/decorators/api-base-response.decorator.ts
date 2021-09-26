import { ApiOkResponse } from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';

export const ApiBaseResponse = () => {
  return applyDecorators(
    ApiOkResponse({
      description: 'Success',
      schema: {
        allOf: [
          {
            properties: {
              statusCode: {
                description: 'Status Code',
                default: 200,
                type: 'number',
              },
              message: {
                description: 'Message',
                default: 'success',
                type: 'string',
              },
            },
          },
        ],
      },
    }),
  );
};
