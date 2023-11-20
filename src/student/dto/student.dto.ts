import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty()
  readonly name: string;
}

export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
