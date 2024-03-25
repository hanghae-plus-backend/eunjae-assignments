export class Base {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  leftAt?: Date;
}

export enum ApplicationType {
  ENROLLMENT = 'ENROLL',
  CANCEL = 'CANCEL',
}
export class Enrollment extends Base {
  courseId: number;
  userId: number;
  applicationType: string;
}

export class Course {
  id: string;
  courseId: string;
  instructor: string;
  maxStudents: number;
  startTime: Date;
  endTime: Date;
}
