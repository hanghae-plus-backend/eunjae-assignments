import { Base } from './enrollment.model';

export class CreateEnrollmentDto extends Base {
  userId: number;
  courseId: number;
}
