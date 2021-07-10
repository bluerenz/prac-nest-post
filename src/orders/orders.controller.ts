import { Body, Controller, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { count } from 'console';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './orders.model';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService){}
    @ApiOperation({summary: 'Создание Машины'})
    @ApiResponse({status: 200, type: Order})
    @Post()
    create(@Body() orderDto: CreateOrderDto){
        return this.ordersService.createOrder(orderDto);
    }

}
