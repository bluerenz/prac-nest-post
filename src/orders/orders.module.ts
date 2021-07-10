import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { Order } from './orders.model';
import { OrdersService } from './orders.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports:[
    SequelizeModule.forFeature([Order])
 ]
})
export class OrdersModule {}
