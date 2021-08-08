import { IsNumber, IsString, Length } from "class-validator";
export class UpdateCarDto{
    @IsNumber({},{message: "Должно быть числом"})
    @Length(9, 9, {message: 'Vin автомобиля должен содержать 9 символов!'})
    Vin: number;

    @IsString({message: "Должно быть строкой"})
    brand: string;

    @IsString({message: "Должно быть строкой"})
    model: string;

    @IsNumber({},{message: "Должно быть числом"})
    @Length(3, 6, {message: 'номер авто должен содержать мин. 3, макс. 6 цифр'})
    plateNumber: number;

    lastOrderDate?: Date | any
}