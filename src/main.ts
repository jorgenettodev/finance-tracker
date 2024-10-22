import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  config();
  await app.listen(process.env.PORT, async () => {
    // const url = await app.getUrl();
    console.log(`Server is running on: http://localhost:${process.env.PORT}`);
  });
}
bootstrap();
