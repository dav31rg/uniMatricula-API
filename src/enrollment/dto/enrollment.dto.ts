import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { IsSemesterConstraint } from '../semester.validator';

export class CreateEnrollmentDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly courseId: number;

  @IsNotEmpty()
  @ApiProperty()
  readonly studentId: number;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @Validate(IsSemesterConstraint)
  readonly semester: string;
}

export class UpdateEnrollmentDto extends PartialType(CreateEnrollmentDto) {}
