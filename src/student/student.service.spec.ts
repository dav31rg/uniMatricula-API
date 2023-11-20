import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentService],
    }).compile();

    service = module.get<StudentService>(StudentService);
  });

  xit('should be defined', () => {
    expect(service).toBeDefined();
  });
});
