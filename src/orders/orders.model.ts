import { Column, DataType, ForeignKey, Model,Table } from "sequelize-typescript";
import { Car } from "src/cars/cars.model";

interface OrderCreationAttrs{
    Vin: number;
    bookingDate: Date;
    endOfBooking: Date;
    tarif: number
}


@Table({tableName:'Orders'})
export class Order extends Model implements OrderCreationAttrs{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true , primaryKey: true })
    ID: number;
    
    @ForeignKey(()=>Car)
    @Column({type: DataType.INTEGER, allowNull:true})
    Vin: number;
    
    @Column({type: DataType.DATE, allowNull:true })
    bookingDate: Date;

    @Column({type: DataType.DATE, allowNull:true })
    endOfBooking: Date;

    @Column({type: DataType.INTEGER })
    tarif: number;
}