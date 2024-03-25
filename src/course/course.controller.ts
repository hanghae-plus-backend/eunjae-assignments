import { Controller, Get, Param } from '@nestjs/common';
import { EnrollmentService } from 'src/enrollment/enrollment.service';

@Controller('/course')
export class CourseController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Get('enrollment-status/:userId/:courseId')
  async checkEnrollment(
    @Param('userId') userId: string,
    @Param('courseId') courseId: string,
  ) {
    const isEnrolled = await this.enrollmentService.checkEnrollment(
      userId,
      courseId,
    );
    return { enrolled: isEnrolled };
  }
}
