import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseTable } from 'src/database/course.table';
import { EnrollmentTable } from 'src/database/enrollment.table';

@Module({
  providers: [CourseTable, EnrollmentTable],
  controllers: [CourseController],
})
export class CourseModule {}
