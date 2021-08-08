import { Body, Controller, Post, Get, Param, Delete, Put } from '@nestjs/common';

import { CreateOrderDto } from './dto/create-order.dto';
import { updateOrderDto } from './dto/update-order.dto';
import { Order } from './orders.model';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService){}

    @Post()
    create(@Body() orderDto: CreateOrderDto){
        return this.ordersService.createOrder(orderDto);
    }

    @Get()
    getAll(){
        return this.ordersService.getAllOrders();
    }


    @Get('/:Vin')
    getByVin(@Param('Vin') Vin: number) {
        return this.ordersService.getOrderByVin(Vin);
    }


    @Get('/:ID')
    getByID(@Param('ID') ID: number) {
        return this.ordersService.getOrderByID(ID);
    }


    @Delete('/:ID')
    deleteCar(@Param('ID') ID: number) {
        return this.ordersService.deleteOrder(ID),"Бронь отменена"
    }

    @Put('/:ID')
    updateCar(@Body()dto: updateOrderDto, @Param('ID') ID: number) {
        return this.ordersService.updateOrder(dto, ID),"Бронь обновлена"
    }
}
