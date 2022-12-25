import { Controller, Get } from '@nestjs/common';
import { EventManagerService } from './event-manager.service';

@Controller()
export class EventManagerController {
  constructor(private readonly eventManagerService: EventManagerService) {}

  @Get()
  getHello(): string {
    return this.eventManagerService.getHello();
  }
}
