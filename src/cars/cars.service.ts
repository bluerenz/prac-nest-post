import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Car } from './cars.model';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
    constructor(@InjectModel(Car) private carRepository: typeof Car){}

    async createCar(dto: CreateCarDto){
        const car = await this.carRepository.create(dto);
        return car;
    } 
    
    async getAllCars(){
        const Cars= await this.carRepository.findAll();
        return Cars;
    }

    async getCarByVin(Vin: number) {
        const carByVin = await this.carRepository.findOne({where: {Vin}})
        return carByVin;
    }

    async deleteCar(Vin: number) {
        const deletedCar = await this.carRepository.destroy({where: {Vin}})
        return deletedCar;
    }

    async update(dto: UpdateCarDto, Vin: number){
        const updateCar= await this.carRepository.update(dto,{where: {Vin: Vin}})
        return updateCar;
    }
}
