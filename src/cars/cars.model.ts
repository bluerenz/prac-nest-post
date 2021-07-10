import { Column, DataType, Model,Table } from "sequelize-typescript";

interface CarCreationAttrs{
    Vin: number;
    brand: string;
    model: string;
    Km: number;
    stateNumber: number
}

@Table({tableName:'Cars'})
export class Car extends Model implements CarCreationAttrs{
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true })
    Vin: number;

    @Column({type: DataType.INTEGER, allowNull:true, defaultValue: 0})
    Km: number;
    
    @Column({type: DataType.STRING, allowNull:true })
    brand: string;

    @Column({type: DataType.STRING, allowNull:true })
    model: string;

    @Column({type: DataType.INTEGER, unique: true })
    stateNumber: number;
}