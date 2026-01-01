import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './libs/interceptor/Logging.interceptor';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor);
  await app.listen(process.env.PORT_API ?? 3000);
  logger.log(`✅✅✅  ==> http://localhost:${process.env.PORT_API}`, "Nestar-Api")
  logger.log(`✅✅✅  ==> http://localhost:${process.env.PORT_API}/graphql`, "Playground")
  // console.log(`✅✅✅ Nestar-api ==> http://localhost:${process.env.PORT_API}`);
  // console.log(`✅✅✅ GraphQL doc ==> http://localhost:${process.env.PORT_API}/graphql`);
}
bootstrap();
