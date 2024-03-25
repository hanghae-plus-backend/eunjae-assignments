import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Base extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn({ select: false })
  createdAt: Date;
  @UpdateDateColumn({ select: false })
  updatedAt: Date;
  @DeleteDateColumn({ nullable: true, select: false })
  leftAt?: Date;
}
