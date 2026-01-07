import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './libs/interceptor/Logging.interceptor';
import { GqlGlobalExceptionFilter } from './libs/filters/gql.filter';
import {graphqlUploadExpress} from "graphql-upload";
import * as express from "express";
import { join } from 'path';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor);
  // app.useGlobalFilters(new GqlGlobalExceptionFilter());
  app.enableCors({origin: true, credentials: true});

  app.use(graphqlUploadExpress({maxFileSize: 15000000, max: 10}));
  app.use('/uploads', express.static(join(process.cwd(), 'uploads')));

  await app.listen(process.env.PORT_API ?? 3000);
  logger.verbose(`✅✅✅  ==> http://localhost:${process.env.PORT_API}`, "Nestar-Api");
  logger.verbose(`✅✅✅  ==> http://localhost:${process.env.PORT_API}/graphql`, "Playground");
}
bootstrap();
