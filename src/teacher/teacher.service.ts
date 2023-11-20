import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeacherDto, UpdateTeacherDto } from './dto/teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) {}

  createTeacher(data: CreateTeacherDto) {
    const newTeacher = this.teacherRepository.create(data);
    return this.teacherRepository.save(newTeacher);
  }

  findAllTeachers() {
    return this.teacherRepository.find();
  }

  findOneTeacher(id: number) {
    const teacher = this.teacherRepository.findOne({
      where: { id },
      relations: ['courses'],
    });
    if (!teacher) {
      throw new NotFoundException(`Teacher #${id} not found`);
    }
    return teacher;
  }

  async updateTeacher(id: number, changes: UpdateTeacherDto) {
    const updatedTeacher = await this.teacherRepository.findOne({
      where: { id },
    });
    this.teacherRepository.merge(updatedTeacher, changes);
    return this.teacherRepository.save(updatedTeacher);
  }

  removeTeacher(id: number) {
    return this.teacherRepository.delete(id);
  }
}
