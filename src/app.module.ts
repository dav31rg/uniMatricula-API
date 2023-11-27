import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TeacherModule } from './teacher/teacher.module';
import { CourseModule } from './course/course.module';
import { StudentModule } from './student/student.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:
        process.env.NODE_ENV === 'production'
          ? process.env.POSTGRES_HOST
          : process.env.POSTGRES_HOST_LOCAL,
      port: parseInt(
        process.env.NODE_ENV === 'production'
          ? process.env.POSTGRES_PORT
          : process.env.POSTGRES_PORT_LOCAL,
      ),
      username:
        process.env.NODE_ENV === 'production'
          ? process.env.POSTGRES_USER
          : process.env.POSTGRES_USER_LOCAL,
      password:
        process.env.NODE_ENV === 'production'
          ? process.env.POSTGRES_PASSWORD
          : process.env.POSTGRES_PASSWORD_LOCAL,
      database:
        process.env.NODE_ENV === 'production'
          ? process.env.POSTGRES_DB
          : process.env.POSTGRES_DB_LOCAL,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    TeacherModule,
    CourseModule,
    StudentModule,
    EnrollmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
