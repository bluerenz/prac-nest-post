import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTarifDto } from './dto/create-tarif.dto';
import { Tarif } from './tarif.model';

@Injectable()
export class TarifService {
    constructor(@InjectModel(Tarif) private tarifRepository: typeof Tarif
    ){}

    async createTarif(dto: CreateTarifDto) {
        const tarif = await this.tarifRepository.create(dto)
        return tarif
    }

    async getTarifById(id: number){
        const getTarif = await this.tarifRepository.findOne({where:{id}})
        return getTarif
    }

    async removeTarif(id: number){
        const deletedTarif = await this.tarifRepository.destroy({where:{id}})
        return deletedTarif
    }
}