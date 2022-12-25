import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('SERVICE') private client: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    this.client.emit('get-all-data', { name: 'Awais' });
    return this.appService.getHello();
  }
  @EventPattern('hello-word')
  getHello1() {
    console.log('hello word from main app controller');
  }
}
