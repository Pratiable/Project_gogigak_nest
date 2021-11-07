import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/httpException.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dayjs from 'dayjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle(`${process.env.PROJECT_NAME} API Docs`)
    .setDescription(`${process.env.PROJECT_NAME}의 API 문서입니다.`)
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        in: 'header',
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
      },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: 0, docExpansion: 'none' },
    customSiteTitle: process.env.PROJECT_NAME,
  });

  dayjs.locale('Asia/Seoul');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors({ origin: true, credentials: true });

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
}
bootstrap();
