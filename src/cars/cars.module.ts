import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { CarsController } from './cars.controller';
import { Car } from './cars.model';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  imports:[
     SequelizeModule.forFeature([Car])
  ]
})
export class CarsModule {}
