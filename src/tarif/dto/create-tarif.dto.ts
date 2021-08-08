import { IsNumber } from "class-validator";

export class CreateTarifDto{
    @IsNumber({}, {message: "Должно быть числом"})
    readonly costPerDay: number;

    @IsNumber({}, {message: "Должно быть числом"})
    readonly kmPerDay: number;
}