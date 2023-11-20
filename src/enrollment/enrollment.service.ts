import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnrollmentDto, UpdateEnrollmentDto } from './dto/enrollment.dto';
import { Enrollment } from './entities/enrollment.entity';
import { StudentService } from 'src/student/student.service';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(Enrollment)
    private readonly enrollmentRepository: Repository<Enrollment>,
    private readonly studentService: StudentService,
    private readonly courseService: CourseService,
  ) {}

  async enrollStudent(data: CreateEnrollmentDto) {
    const newEnroll = this.enrollmentRepository.create(data);
    if (data.studentId && data.courseId) {
      const student = await this.studentService.findOneStudent(data.studentId);
      const course = await this.courseService.findOneCourse(data.courseId);
      newEnroll.student = student;
      newEnroll.course = course;
    }
    return this.enrollmentRepository.save(newEnroll);
  }

  findAllEnrollments() {
    return this.enrollmentRepository.find({
      relations: ['course', 'student'],
    });
  }

  findOneEnroll(id: number) {
    const enroll = this.enrollmentRepository.findOne({
      where: { id },
      relations: ['course', 'student'],
    });
    if (!enroll) {
      throw new NotFoundException(`Enroll #${id} not found`);
    }
    return enroll;
  }

  async updateEnroll(id: number, Changes: UpdateEnrollmentDto) {
    const updatedEnroll = await this.enrollmentRepository.findOne({
      where: { id },
    });
    this.enrollmentRepository.merge(updatedEnroll, Changes);
    return this.enrollmentRepository.save(updatedEnroll);
  }

  removeEnroll(id: number) {
    return this.enrollmentRepository.delete(id);
  }
}
