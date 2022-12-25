import { NestFactory } from '@nestjs/core';
import { EventManagerModule } from './event-manager.module';

async function bootstrap() {
  const app = await NestFactory.create(EventManagerModule);
  await app.listen(3000);
}
bootstrap();
