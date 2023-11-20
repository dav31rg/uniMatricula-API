import { Test, TestingModule } from '@nestjs/testing';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

const mockCourseService = {
  findAllCourses: jest.fn(),
};

describe('CourseController', () => {
  let controller: CourseController;
  let service: CourseService;

  beforeEach(async () => {
    mockCourseService.findAllCourses.mockResolvedValue([
      { id: 1, name: 'Test Course 1', teacherId: 1 },
      { id: 2, name: 'Test Course 2', teacherId: 2 },
    ]);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseController],
      providers: [
        {
          provide: CourseService,
          useValue: mockCourseService,
        },
      ],
    }).compile();

    controller = module.get<CourseController>(CourseController);
    service = module.get<CourseService>(CourseService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should call CourseService.findAllCourses', async () => {
      await controller.findAll();
      expect(service.findAllCourses).toHaveBeenCalled();
    });
  });
});
