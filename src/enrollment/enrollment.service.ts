import { Injectable } from '@nestjs/common';
import { CourseRepository } from 'src/repository/course.repository';
import { EnrollmentRepository } from 'src/repository/enrollment.repository';
import { ApplicationType } from './enrollment.model';
import { Exception } from 'src/class/exception/exception';
import { EnrollmentError1, EnrollmentError2 } from 'error/all.error';

@Injectable()
export class EnrollmentService {
  constructor(
    private readonly enrollmentRepository: EnrollmentRepository,
    private readonly courseRepository: CourseRepository,
  ) {}

  async enroll(
    userId: string,
    courseId: string,
  ): Promise<{ success: boolean; message: string }> {
    const course = await this.courseRepository.findById(courseId);
    if (course.enrollment.length >= course.maxStudents) {
      return { success: false, message: 'Enrollment full' };
    }
    const isAlreadyEnrolled = await this.enrollmentRepository.alreadyEnrolled(userId,courseId)
    if(isAlreadyEnrolled && isAlreadyEnrolled > 0 ) {
      throw Exception('EnrollmentError', EnrollmentError2);
    }
      await this.enrollmentRepository.createEnrollment({
        user: userId,
        course: courseId,
        applicationType: ApplicationType.ENROLLMENT,
      });
      return { success: true, message: 'enrolled successfully' };
    
  }
}
