import { Body, Controller, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { count } from 'console';
import { CreateOrderDto } from './dto/create-order.dto';
import { updateOrderDto } from './dto/update-order.dto';
import { Order } from './orders.model';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService){}
    @ApiOperation({summary: 'Бронирование'})
    @ApiResponse({status: 200, type: Order})
    @Post()
    create(@Body() orderDto: CreateOrderDto){
        return this.ordersService.createOrder(orderDto);
    }
    
    @ApiOperation({summary: 'Получить все брони'})
    @ApiResponse({status: 200, type: [Order]})
    @Get()
    getAll(){
        return this.ordersService.getAllOrders();
    }

    @ApiOperation({summary: 'Получить брони по Vin'})
    @ApiResponse({status: 200, type: Order})
    @Get('/:Vin')
    getByVin(@Param('Vin') Vin: number) {
        return this.ordersService.getOrderByVin(Vin);
    }

    @ApiOperation({summary: 'Получить брони по ID'})
    @ApiResponse({status: 200, type: Order})
    @Get('/:ID')
    getByID(@Param('ID') ID: number) {
        return this.ordersService.getOrderByID(ID);
    }

    @ApiOperation({summary: 'Удалить бронирование по ID'})
    @ApiResponse({status: 200, type: Order})
    @Delete('/:ID')
    deleteCar(@Param('ID') ID: number) {
        return this.ordersService.deleteOrder(ID),"Бронь отменена"
    }

    @ApiOperation({summary: 'Обновить бронирование по ID'})
    @ApiResponse({status: 200, type: Order})
    @Put('/:ID')
    updateCar(@Body()dto: updateOrderDto, @Param('ID') ID: number) {
        return this.ordersService.updateOrder(dto, ID),"Бронь обновлена"
    }
}
