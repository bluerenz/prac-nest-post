import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DataType } from 'sequelize-typescript';
import { CarsService } from 'src/cars/cars.service';
import { UpdateCarDto } from 'src/cars/dto/update-car.dto';
import { TarifService } from 'src/tarif/tarif.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { updateOrderDto } from './dto/update-order.dto';
import { Order } from './orders.model';

@Injectable()
export class OrdersService {
     constructor(@InjectModel(Order) private orderRepository: typeof Order,
     private tarifsService: TarifService,
     private carsService: CarsService,){}
     
     async createOrder(dto: CreateOrderDto){
        const carExists = await this.carsService.getCarByVin(dto.Vin)
        const tarifExists = await this.tarifsService.getTarifById(dto.tarifId)
        if(!carExists || !tarifExists) 
        {
            throw new HttpException('Авто с таким вин или тарифом нет!', HttpStatus.NOT_FOUND)
        }
        dto.endOfBooking = new Date(dto.endOfBooking)
        dto.bookingDate = new Date(dto.bookingDate)
        const today: any = new Date()

        console.log("прошло дней с последнего заказа: ", Math.abs(Math.floor((today - dto.bookingDate)/1000/60/60/24)))

        const lastOrderDate = new Date(carExists.lastOrderDate)
        lastOrderDate.setDate(lastOrderDate.getDate() + 3)

        const days = (dto.endOfBooking - dto.bookingDate)/1000/60/60/24
        dto.kmPerOrder = days * tarifExists.kmPerDay

        if(lastOrderDate > dto.bookingDate) {
            throw new HttpException(`С момента последнего заказа должно пройти более 3х дней!`, HttpStatus.BAD_REQUEST)
        } else if(dto.bookingDate.getDay() === 0 || dto.bookingDate.getDay() === 6) {
            throw new HttpException("Извините, но аренда авто возможна только в будние дни", HttpStatus.BAD_REQUEST)
        } else if(days>30) {
            throw new HttpException("Извините, но аренда авто возможна не больше чем на 30 дней", HttpStatus.BAD_REQUEST)
        }
        console.log("Общий пробег: ", dto.kmPerOrder)
        console.log('Days: ' ,days)

        dto.orderCost = await this.calculate(days, tarifExists.costPerDay)
        console.log("days: ", dto.orderCost, tarifExists.costPerDay)
        carExists.lastOrderDate = dto.endOfBooking
        await this.carsService.update({lastOrderDate: dto.endOfBooking}as UpdateCarDto,  dto.Vin)
        return await this.orderRepository.create(dto)
    }

    private async calculate(orderDays, cost) {
       let amount = 0
       if(orderDays >= 15) {
       amount = Math.floor(orderDays * cost - (orderDays * cost * 0.15))
         } else if(orderDays >= 6 && orderDays <= 14)
         {
            amount = Math.floor(orderDays * cost - (orderDays * cost * 0.10))
         } else if(rentalDays => 3 && rentalDays <= 5) 
         {
            amount = Math.floor(orderDays * cost - (orderDays * cost * 0.05))
         } else {
            amount = Math.floor(orderDays * cost)
         }
         return amount
    }
    
    async getAllOrders(){
        const Orders= await this.orderRepository.findAll();
        return Orders;
    }

    async getOrderByVin(Vin: number) {
        const orderByVin = await this.orderRepository.findOne({where: {Vin}})
        return orderByVin;
    }

    async getOrderByID(ID: number) {
        const orderByID = await this.orderRepository.findOne({where: {ID}})
        return orderByID;
    }

    async deleteOrder(Vin: number) {
        const deletedOrder = await this.orderRepository.destroy({where: {Vin}})
        return deletedOrder;
    }

    async updateOrder(dto: updateOrderDto, Vin: number){
        const updateOrder= await this.orderRepository.update(dto,{where: {Vin: Vin}})
        return updateOrder;
    }
}
