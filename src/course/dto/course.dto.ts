import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly teacherId: number;
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
