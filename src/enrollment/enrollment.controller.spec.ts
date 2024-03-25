import { Test, TestingModule } from '@nestjs/testing';
import { PointController } from './enrollment.controller';

import { PointModule } from './enrollment.module';
describe('PointController', () => {
  let pointController: PointController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [PointModule],
      controllers: [PointController],
    }).compile();

    pointController = app.get<PointController>(PointController);
  });

  describe('root', () => {
    it('should return "userPointPromise"', () => {
      const id: string = '1111';
      expect(pointController.point(id)).toBe(Promise<>);
    });
  });
});
