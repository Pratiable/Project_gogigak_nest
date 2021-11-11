import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { applyDecorators, Type } from '@nestjs/common';

export const ApiListResponse = <TModel extends Type<unknown>>(
  model: TModel,
) => {
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
              list: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
    ApiExtraModels(model),
  );
};
