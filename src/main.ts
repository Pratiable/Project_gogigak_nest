import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/httpException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      errorHttpStatusCode: 401,
      transform: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
}
bootstrap();
