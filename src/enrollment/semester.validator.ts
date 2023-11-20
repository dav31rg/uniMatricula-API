import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'semester', async: true })
export class IsSemesterConstraint implements ValidatorConstraintInterface {
  validate(semester: any) {
    const regex = /^(2023|202[4-9])-[12]$/;
    return regex.test(semester);
  }

  defaultMessage() {
    return 'Semester must be in the format YYYY-1 or YYYY-2';
  }
}
