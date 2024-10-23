import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('minhaApi')
    .setDescription('Finance Tracker API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('minhaApi', app, document);

  await app.listen(process.env.PORT, async () => {
    // const url = await app.getUrl();
    console.log(`Server is running on: http://localhost:${process.env.PORT}`);
  });
}
bootstrap();
