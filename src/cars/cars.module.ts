import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from 'src/orders/orders.model';
import { Tarif } from 'src/tarif/tarif.model';
import { TarifModule } from 'src/tarif/tarif.module'; 
import { CarsController } from './cars.controller';
import { Car } from './cars.model';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  imports:[
     SequelizeModule.forFeature([Car,Tarif,Order]),
     TarifModule
  ]
})
export class CarsModule {}
