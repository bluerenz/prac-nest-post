import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './orders.model';

@Injectable()
export class OrdersService {
     constructor(@InjectModel(Order) private orderRepository: typeof Order){}
     async createOrder(dto: CreateOrderDto){
        //const order = await this.orderRepository.create(dto);
        let dif = Math.abs(dto.endOfBooking.getTime() - dto.bookingDate.getTime()) / (1000*60*60*24);
        let cost = 0;
        let discout = 0;
        let finalCost=0;
        //TODO: check if dif > 30
        if(dif >= 3 && dif <= 5)
        {
            discout = 0.05;
        } else if (dif >= 6 && dif <= 14){
            discout = 0.1;
        } else if (dif >= 15 && dif <= 30){
            discout = 0.15;
        } else if (dif<3) {
            discout = 0;
        } else {
            return "Powel nah"
        }
        switch (dto.tarif){
        case 1: cost=270
        break
        case 2: cost=330
        break
        case 3: cost=390
        break
        }
        
        finalCost=(cost-(cost*discout))*dif

        var finaleString = `Ваш заказ стоит ${finalCost}`
        return finaleString;
    } 
}
