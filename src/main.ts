import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { MorganMiddleware } from './common/middlewares/morgan.middleware';
import * as dayjs from 'dayjs';
import * as hpp from 'hpp';
import * as helmet from 'helmet';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const env = process.env.NODE_ENV === 'production';

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

  if (env) {
    app.use(hpp({ checkQuery: false }));
    app.use(helmet({ contentSecurityPolicy: false }));
    app.use(morgan(MorganMiddleware));
    app.enableCors({ origin: true, credentials: true });
  } else {
    app.use(morgan('dev'));
    app.enableCors({ origin: true, credentials: true });
  }

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
}
bootstrap();
