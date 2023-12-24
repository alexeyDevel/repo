import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { CommonExceptionFilter } from './app/filters/common-exception.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.use(
    session({
      secret: 'your_secret_key',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.enableShutdownHooks();
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
  // app.useGlobalFilters(new CommonExceptionFilter());
  const config = new DocumentBuilder()
    .setTitle('Sovtrud API')
    .setDescription('The sovtrud API description')
    .setVersion('1.0')
    .addTag('sovtrud')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT);
}
bootstrap();
