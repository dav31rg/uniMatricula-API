import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { Teacher } from './entities/teacher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher])],
  providers: [TeacherService],
  controllers: [TeacherController],
})
export class TeacherModule {}
