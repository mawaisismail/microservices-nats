import { Module } from '@nestjs/common';
import { EventManagerController } from './event-manager.controller';
import { EventManagerService } from './event-manager.service';

@Module({
  imports: [],
  controllers: [EventManagerController],
  providers: [EventManagerService],
})
export class EventManagerModule {}
