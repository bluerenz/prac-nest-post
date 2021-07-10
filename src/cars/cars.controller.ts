import { Body, Controller, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Car } from './cars.model';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService) {}
    
    @ApiOperation({summary: 'Создание Машины'})
    @ApiResponse({status: 200, type: Car})
    @Post()
    create(@Body() carDto: CreateCarDto){
        return this.carsService.createCar(carDto),"Машина добавлена";
    }
    
    @ApiOperation({summary: 'Получить все машины'})
    @ApiResponse({status: 200, type: [Car]})
    @Get()
    getAll(){
        return this.carsService.getAllCars(),"Все машины";
    }

    @ApiOperation({summary: 'Получить машину по Vin'})
    @ApiResponse({status: 200, type: Car})
    @Get('/:Vin')
    getByVin(@Param('Vin') Vin: number) {
        return this.carsService.getCarByVin(Vin);
    }

    @ApiOperation({summary: 'Удалить машину по Vin'})
    @ApiResponse({status: 200, type: Car})
    @Delete('/:Vin')
    deleteCar(@Param('Vin') Vin: number) {
        return this.carsService.deleteCar(Vin),"Машина удалена"
    }

    @ApiOperation({summary: 'Удалить машину по Vin'})
    @ApiResponse({status: 200, type: Car})
    @Put('/:Vin')
    updateCar(@Body()dto: UpdateCarDto, @Param('Vin') Vin: number) {
        return this.carsService.update(dto, Vin),"Машина Обновлена"
    }
}
