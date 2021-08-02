import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Car } from 'src/cars/cars.model';
import { Order } from 'src/orders/orders.model';
import { TarifController } from './tarif.controller';
import { Tarif } from './tarif.model';
import { TarifService } from './tarif.service';



@Module({
  controllers: [TarifController],
  providers: [TarifService],
  imports: [
    SequelizeModule.forFeature([Tarif, Car, Order])
  ],
  exports: [
    TarifService
  ]
})
export class TarifModule {}