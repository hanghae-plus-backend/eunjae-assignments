import { Body, Controller, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { Exception } from 'src/class/exception/exception';
import { EnrollmentError1 } from 'error/all.error';

@Controller('/enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  async enroll(@Body() createEnrollDto: { userId: string; courseId: string }) {
    const result = await this.enrollmentService.enroll(
      createEnrollDto.userId,
      createEnrollDto.courseId,
    );
    if (createEnrollDto.userId) {
      return { data: result, status: 200 };
    }
    throw Exception('EnrollmentError', EnrollmentError1);
  }
}
