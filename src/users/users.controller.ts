import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @Post()
    createUser(@Body() dto: CreateUserDto, email: string){
        return this.userService.createUser(dto)
    }

    @Get()
    getAllUsers(){
        return this.userService.getAllUsers()
    }

    @Get('/:email')
    getUserByEmail(@Param('email') email: string){
        return this.userService.getUserByEmail(email)
    }

    @Delete('/:id')
    deleteUserById(@Param('/:id') id: number){
        return this.userService.deleteUserById(id), "Пользователь Удален"
    }
}
