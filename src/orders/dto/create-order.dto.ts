import { IsDate, IsNumber, IsString, Length } from "class-validator";


export class CreateOrderDto{
    @IsNumber({},{message: "Должно быть числом"})
    @Length(9, 9, {message: 'Вин автомобиля должен содержать 9 символов!'})
    Vin: number;

    @IsNumber({}, {message: "Должно быть числом"})
    @Length(1, 1, {message: 'максимум 1 число'})
    tarifId: number;

    @IsDate({message: "Должно быть датой"})
     @Length(10, 10, {message: "введите пожалуйста дату(гггг-мм-дд)"})
    bookingDate: Date | any

    @IsDate({message: "Должно быть датой"})
    @Length(10, 10, {message: "введите пожалуйста дату(гггг-мм-дд)"})
    endOfBooking: Date | any

    kmPerOrder?: number

    orderCost?: number;

}