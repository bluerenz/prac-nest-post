import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize"
import { Car } from "./cars/cars.model";
import { CarsModule } from './cars/cars.module';
import { Order } from "./orders/orders.model";
import { OrdersModule } from './orders/orders.module';

@Module({
    controllers: [],
    providers: [],
    imports:[ConfigModule.forRoot({
        envFilePath:`.${process.env.NODE_ENV}.env`
    }),
        SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [Car, Order],
        autoLoadModels:true
      }), CarsModule, OrdersModule,
    ]
})
export class AppModule {}