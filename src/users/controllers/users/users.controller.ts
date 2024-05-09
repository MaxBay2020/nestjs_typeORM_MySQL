import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import CreatedUserDto from "../../dtos/CreatedUser.dto";
import { UsersService } from "../../service/users/users.service";
import UpdatedUserDto from "../../dtos/UpdatedUser.dto";

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService){}

  // 查询所有user；
  @Get()
  queryAllUsers(){
    return this.userService.queryAllUsers()
  }

  // 根据userId查询单个user；
  @Get('/:userId')
  queryUserById(@Param('userId') userId: string){
    return this.userService.queryUserById(userId)
  }


  // 创建user；
  @Post()
  async createUser(@Body() user: CreatedUserDto){
    await this.userService.createUser(user)
  }

  // 更新user；
  @Put('/:userId')
  updateUserById(@Param('userId') userId: string, @Body() updatedUserDto: UpdatedUserDto){
    return this.userService.updateUserById(userId, updatedUserDto)
  }

  @Delete('/:userId')
  deleteUesrById(@Param('userId') userId: string){
    return this.userService.deleteUserById(userId)
  }

}
