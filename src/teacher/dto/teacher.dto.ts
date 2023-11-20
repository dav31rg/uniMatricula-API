import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateTeacherDto {
  @ApiProperty()
  readonly name: string;
  // readonly courseId: number[];
}

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {}
