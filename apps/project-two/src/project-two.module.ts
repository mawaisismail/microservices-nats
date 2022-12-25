import { Module } from '@nestjs/common';
import { ProjectTwoController } from './project-two.controller';
import { ProjectTwoService } from './project-two.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
  ],
  controllers: [ProjectTwoController],
  providers: [ProjectTwoService],
})
export class ProjectTwoModule {}
