import { Column, DataType, Model,Table } from "sequelize-typescript";


interface CarCreationAttrs{
    Vin: number;
    brand: string;
    model: string;
    stateNumber: number
}

@Table({tableName:'Cars'})
export class Car extends Model implements CarCreationAttrs{
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true })
    Vin: number;
    
    @Column({type: DataType.STRING, allowNull:false })
    brand: string;

    @Column({type: DataType.STRING, allowNull:false })
    model: string;

    @Column({type: DataType.INTEGER, unique: true })
    stateNumber: number;

    @Column({type: DataType.DATE, allowNull: true})
    lastOrderDate: Date;

}