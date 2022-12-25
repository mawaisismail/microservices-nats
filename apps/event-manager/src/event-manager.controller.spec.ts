import { Test, TestingModule } from '@nestjs/testing';
import { EventManagerController } from './event-manager.controller';
import { EventManagerService } from './event-manager.service';

describe('EventManagerController', () => {
  let eventManagerController: EventManagerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EventManagerController],
      providers: [EventManagerService],
    }).compile();

    eventManagerController = app.get<EventManagerController>(EventManagerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(eventManagerController.getHello()).toBe('Hello World!');
    });
  });
});
