import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto, UpdateCourseDto } from './dto/course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { TeacherService } from 'src/teacher/teacher.service';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    private readonly teacherService: TeacherService,
  ) {}

  async createCourse(data: CreateCourseDto) {
    const newCourse = this.courseRepository.create(data);
    if (data.teacherId) {
      const teacher = await this.teacherService.findOneTeacher(data.teacherId);
      newCourse.teacher = teacher;
    }
    return this.courseRepository.save(newCourse);
  }

  findAllCourses() {
    return this.courseRepository.find({
      relations: ['teacher'],
    });
  }

  findOneCourse(id: number) {
    const course = this.courseRepository.findOne({
      where: { id },
      relations: ['teacher'],
    });
    if (!course) {
      throw new NotFoundException(`Course #${id} not found`);
    }
    return course;
  }

  async updateCourse(id: number, changes: UpdateCourseDto) {
    const updatedCourse = await this.courseRepository.findOne({
      where: { id },
    });
    if (changes.teacherId) {
      const teacher = await this.teacherService.findOneTeacher(
        changes.teacherId,
      );
      updatedCourse.teacher = teacher;
    }
    this.courseRepository.merge(updatedCourse, changes);
    return this.courseRepository.save(updatedCourse);
  }

  removeCourse(id: number) {
    return this.courseRepository.delete(id);
  }
}
