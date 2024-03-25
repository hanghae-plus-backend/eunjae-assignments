/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseError1, CourseError2 } from 'error/all.error';
import { Exception } from 'src/class/exception/exception';
import { CourseEntity } from 'src/entity/course.entity';
import { DataSource, EntityManager, Repository } from 'typeorm';

@Injectable()
export class CourseRepository extends Repository<CourseEntity> {
  constructor(@InjectRepository(CourseEntity) private dataSource: DataSource) {
    super(CourseEntity, dataSource.manager);
  }
  async findById(id: string) {
    return await this.findOneOrFail({
      relations: {
        enrollment: true,
      },
      where: { id },
    }).catch((error) => {
      throw Exception('CourseError', `${CourseError2} : ${id}`, error);
    });
  }

  async createCourse(
    dto: Partial<CourseEntity>,
    entityManager?: EntityManager,
  ) {
    const data = this.create({ ...dto });

    const func = entityManager
      ? entityManager.save(CourseEntity, data)
      : this.save(data);

    return await func
      .then((saved) => {
        const { leftAt, createdAt, updatedAt, ...rest } = saved;
        return { ...rest };
      })
      .catch((error) => {
        throw Exception('CourseError1', CourseError1, error);
      });
  }
}
