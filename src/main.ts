import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundErrorFilter } from './filter-errors/not-found-error/not-found-error.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('api_UserManagement')
  .setVersion('1.0')
  .addBearerAuth()
  .build()

  const documenteFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, documenteFactory)

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
