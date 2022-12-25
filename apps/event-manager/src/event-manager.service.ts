import { Injectable } from '@nestjs/common';

@Injectable()
export class EventManagerService {
  getHello(): string {
    return 'Hello World!';
  }
}
