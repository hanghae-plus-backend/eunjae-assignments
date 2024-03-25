import { Module } from '@nestjs/common';
import { EnrollmentController } from './enrollment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnrollmentRepository } from 'src/repository/enrollment.repository';
import { CourseRepository } from 'src/repository/course.repository';
import { EnrollmentEntity } from 'src/entity/enrollment.entity';
import { CourseEntity } from 'src/entity/course.entity';
@Module({
  imports: [TypeOrmModule.forFeature([EnrollmentEntity, CourseEntity])],
  providers: [EnrollmentRepository, CourseRepository],
  controllers: [EnrollmentController],
})
export class EnrollmentModule {}
