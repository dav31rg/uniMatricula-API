import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateTeacherDto {
  @ApiProperty()
  readonly name: string;
}

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {}
