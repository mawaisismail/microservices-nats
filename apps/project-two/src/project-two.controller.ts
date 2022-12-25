import { Controller, Get, Inject } from '@nestjs/common';
import { ProjectTwoService } from './project-two.service';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class ProjectTwoController {
  constructor(
    private readonly projectTwoService: ProjectTwoService,
    @Inject('SERVICE') private client: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    this.client.emit('hello-word', {});
    return this.projectTwoService.getHello();
  }

  @EventPattern('get-all-data')
  getData(@Payload() data: any) {
    console.log(data, 'Data');
  }
}
