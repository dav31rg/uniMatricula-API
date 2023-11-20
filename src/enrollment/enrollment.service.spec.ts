import { Test, TestingModule } from '@nestjs/testing';
import { EnrollmentService } from './enrollment.service';
import { CourseService } from 'src/course/course.service';
import { StudentService } from 'src/student/student.service';
import { Student } from 'src/student/entities/student.entity';
import { Course } from 'src/course/entities/course.entity';

describe('EnrollmentService', () => {
  let service: EnrollmentService;
  let studentService: StudentService;
  let courseService: CourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnrollmentService, StudentService, CourseService],
    }).compile();

    service = module.get<EnrollmentService>(EnrollmentService);
    studentService = module.get<StudentService>(StudentService);
    courseService = module.get<CourseService>(CourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('testprincipal', async () => {
    // Create new student and course
    const student = await studentService.createStudent({ name: 'testino' });
    const course = await courseService.createCourse({ name: 'maths I' });
    // Enroll student in semester 2023-1
    const enrollment = await service.enrollStudent(student, course, '2023-1');
    // Verify enrollment create correctly
    expect(enrollment.student).toBeInstanceOf(Student);
    expect(enrollment.course).toBeInstanceOf(Course);
    expect(enrollment.semester).toEqual('2023-1');
  });
});
