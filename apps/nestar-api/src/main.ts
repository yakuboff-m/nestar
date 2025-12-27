import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT_API ?? 3000);
  console.log(`✅✅✅ Nestar-api ==> http://localhost:${process.env.PORT_API}`);
  console.log(`✅✅✅ GraphQL doc ==> http://localhost:${process.env.PORT_API}/graphql`);
}
bootstrap();
