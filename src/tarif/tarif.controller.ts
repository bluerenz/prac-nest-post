import { Controller, Post, Body, Delete, Get, Param } from '@nestjs/common';
import { CreateTarifDto } from './dto/create-tarif.dto'; 
import { TarifService } from './tarif.service'; 

@Controller('tarifs')
export class TarifController {

    constructor(private tarifService: TarifService) {}
    @Post()
    create(@Body() tarifDto: CreateTarifDto) {
        return this.tarifService.createTarif(tarifDto)
    }

    @Get('/:id')
    getById(@Param('id') id: number){
        return this.tarifService.getTarifById(id)
    }

    @Delete()
    delete(@Param('id') id: number){
        return this.tarifService.removeTarif(id), "Тариф удален"
    }
}