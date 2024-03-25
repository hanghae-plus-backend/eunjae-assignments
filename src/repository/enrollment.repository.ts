import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnrollmentError1 } from 'error/all.error';
import { Exception } from 'src/class/exception/exception';
import { EnrollmentEntity } from 'src/entity/enrollment.entity';
import { UserEntity } from 'src/entity/user.entity';
import { UserRolesTypesEnum } from 'src/enum/user-roles-types.enum';
import { DataSource, EntityManager, Repository } from 'typeorm';

@Injectable()
export class EnrollmentRepository extends Repository<EnrollmentEntity> {
  constructor(
    @InjectRepository(EnrollmentEntity) private dataSource: DataSource,
  ) {
    super(EnrollmentEntity, dataSource.manager);
  }

  async createEnrollment({
    user,
    course,
    applicationType,
    entityManager,
  }: {
    user: string;
    course: string;
    applicationType: string;
    entityManager?: EntityManager;
  }) {
    const created = this.create({
      course: { id: course },
      applicationType: applicationType,
      user: { id: user, userType: UserRolesTypesEnum.Student },
    });

    const func = entityManager
      ? entityManager.save(EnrollmentEntity, created)
      : this.save(created);

    return await func.catch((error) => {
      throw Exception(
        'EnrollmentError1',
        `${EnrollmentError1} : ${JSON.stringify(created)}`,
        error,
      );
    });
  }

  async alreadyEnrolled(userId:string,courseId:string){ 
  return await this.dataSource
  .getRepository(UserEntity)
  .createQueryBuilder("user")
  .where("user.id = :id", { id: userId })
  .where("course.id = :id", { id: courseId })
  .getCount()
}
}
