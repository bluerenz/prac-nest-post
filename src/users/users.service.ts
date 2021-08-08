import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User){}
    async createUser(dto: CreateUserDto){
        const userExists = await this.findUser(dto.email)
        if(userExists){
            throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
        }
        const user = await this.userRepository.create(dto)
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll()
        return users
    }

    async deleteUserById(id: number){
        const deleted = await this.userRepository.destroy({where: {id}})
        return deleted
    }

    async getUserByEmail(email: string){
        const user = await this.userRepository.findOne({where: {email}})
        return user
    }

    private async findUser(email: string){
        const user = await this.userRepository.findOne({where: {email}})
        return user
    }
}
