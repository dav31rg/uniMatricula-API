import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDto, UpdateEnrollmentDto } from './dto/enrollment.dto';

@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createEnrollData: CreateEnrollmentDto) {
    return this.enrollmentService.enrollStudent(createEnrollData);
  }

  @Get()
  findAll() {
    return this.enrollmentService.findAllEnrollments();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.enrollmentService.findOneEnroll(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEnrollmentDto: UpdateEnrollmentDto,
  ) {
    return this.enrollmentService.updateEnroll(id, updateEnrollmentDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.enrollmentService.removeEnroll(id);
  }
}
