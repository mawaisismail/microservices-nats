import { Test, TestingModule } from '@nestjs/testing';
import { ProjectTwoController } from './project-two.controller';
import { ProjectTwoService } from './project-two.service';

describe('ProjectTwoController', () => {
  let projectTwoController: ProjectTwoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProjectTwoController],
      providers: [ProjectTwoService],
    }).compile();

    projectTwoController = app.get<ProjectTwoController>(ProjectTwoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(projectTwoController.getHello()).toBe('Hello World!');
    });
  });
});
