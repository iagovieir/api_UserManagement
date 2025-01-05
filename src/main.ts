import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundErrorFilter } from './filter-errors/not-found-error/not-found-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*'
  })

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422
    })
  );

  app.useGlobalPipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true}));
  app.useGlobalFilters(new NotFoundErrorFilter())


  await app.listen(3000);
}
bootstrap();
