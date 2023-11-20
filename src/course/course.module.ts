import { Module } from '@nestjs/common';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Course } from './entities/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { TeacherService } from 'src/teacher/teacher.service';
// import { Enrollment } from 'src/enrollment/entities/enrollment.entity';
// import { Student } from 'src/student/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Teacher])],
  providers: [CourseService, TeacherService],
  controllers: [CourseController],
})
export class CourseModule {}
