import { Column, DataType, ForeignKey, Model,Table } from "sequelize-typescript";
import { Car } from "src/cars/cars.model";
import { Tarif } from "src/tarif/tarif.model";

interface OrderCreationAttrs{
    Vin: number;
    tarifId: number;
    bookingDate: Date;
    endOfBooking: Date;
}


@Table({tableName:'Orders'})
export class Order extends Model implements OrderCreationAttrs{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true , primaryKey: true })
    ID: number;
    
    @ForeignKey(()=>Car)
    @Column({type: DataType.INTEGER, unique: false})
    Vin: number;
    
    @Column({type: DataType.DATE, allowNull:false })
    bookingDate: Date;

    @Column({type: DataType.DATE, allowNull:false })
    endOfBooking: Date;
    
    @ForeignKey(() => Tarif)
    @Column({type: DataType.INTEGER,allowNull:false })
    tarifId: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    kmPerOrder: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    orderCost: number;
}