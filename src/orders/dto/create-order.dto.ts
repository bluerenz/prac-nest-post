export class CreateOrderDto{
    Vin: number;
    tarifId: number;
    bookingDate: Date | any
    endOfBooking: Date | any
    kmPerOrder?: number
    orderCost?: number;

}