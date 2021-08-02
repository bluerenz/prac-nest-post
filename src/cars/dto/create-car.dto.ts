export class CreateCarDto {
    Vin: number;
    brand: string;
    model: string;
    plateNumber: number;
    lastOrderDate?: Date | any
}