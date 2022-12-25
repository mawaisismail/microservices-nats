import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectTwoService {
  getHello(): string {
    return 'Project 2 ';
  }
}
