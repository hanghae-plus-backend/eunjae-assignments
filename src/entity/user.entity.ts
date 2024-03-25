/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, OneToMany, JoinTable } from 'typeorm';
import { Base } from './base';
import { UserRolesTypesEnum } from 'src/enum/user-roles-types.enum';
import { EnrollmentEntity } from './enrollment.entity';

@Entity('user')
export class UserEntity extends Base {
  @Column({ type: String })
  userType: UserRolesTypesEnum;

  @OneToMany((type) => EnrollmentEntity, (enroll) => enroll.user, {
    cascade: true,
  })
  @JoinTable()
  enroll: EnrollmentEntity[];
}
