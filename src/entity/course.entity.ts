/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Base } from './base';
import { EnrollmentEntity } from './enrollment.entity';

@Entity('course', {})
export class CourseEntity extends Base {
  @Column({ length: 30 })
  courseTitle: string;

  @Column({ length: 30 })
  instructor: string;

  @Column({ type: Number })
  maxStudents: 40;

  @ManyToOne((type) => EnrollmentEntity, (enrollment) => enrollment.course)
  @JoinColumn()
  @Column({ nullable: true })
  enrollment?: EnrollmentEntity[];
}
