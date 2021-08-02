import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { Order } from './orders.model';
import { OrdersService } from './orders.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Car } from 'src/cars/cars.model';
import { Tarif } from 'src/tarif/tarif.model';
import { TarifService } from 'src/tarif/tarif.service';
import { CarsService } from 'src/cars/cars.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService,TarifService,CarsService],
  imports:[
    SequelizeModule.forFeature([Order,Car,Tarif])
 ]
})
export class OrdersModule {}
