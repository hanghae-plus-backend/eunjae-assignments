/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Base } from './base';
import { UserEntity } from './user.entity';
import { CourseEntity } from './course.entity';

@Entity('enrollment')
export class EnrollmentEntity extends Base {
  @ManyToOne((type) => UserEntity, (user) => user.enroll)
  @JoinColumn()
  @Column({})
  user: UserEntity;

  @OneToMany((type) => CourseEntity, (course) => course.enrollment)
  @JoinColumn()
  @Column({})
  course: CourseEntity;

  @Column({ length: 30, nullable: true })
  applicationType: string;
}
