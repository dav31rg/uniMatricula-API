import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  createStudent(data: CreateStudentDto) {
    const newStudent = this.studentRepository.create(data);
    return this.studentRepository.save(newStudent);
  }

  findAllStudents() {
    return this.studentRepository.find();
  }

  findOneStudent(id: number) {
    const student = this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException(`Student #${id} not found`);
    }
    return student;
  }

  async updateStudent(id: number, changes: UpdateStudentDto) {
    const updatedStudent = await this.studentRepository.findOne({
      where: { id },
    });
    this.studentRepository.merge(updatedStudent, changes);
    return this.studentRepository.save(updatedStudent);
  }

  removeStudent(id: number) {
    return this.studentRepository.delete(id);
  }
}
