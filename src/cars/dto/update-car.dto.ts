export class UpdateCarDto{
    Vin: number;
    brand: string;
    model: string;
    plateNumber: number;
    lastOrderDate?: Date | any
}