import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { DatabaseModule } from './database/database.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [EnrollmentModule, DatabaseModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
