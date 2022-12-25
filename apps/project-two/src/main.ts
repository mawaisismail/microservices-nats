import { NestFactory } from '@nestjs/core';
import { ProjectTwoModule } from './project-two.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(ProjectTwoModule);
  const appEvent = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProjectTwoModule,
    {
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222'],
      },
    },
  );
  await appEvent.listen();
  await app.listen(3010);
}
bootstrap();
