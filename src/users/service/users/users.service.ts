import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import User from "../../../typeORM/entities/User";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import CreatedUserDto from "../../dtos/CreatedUser.dto";
import { validate } from "class-validator";
import UpdatedUserDto from "../../dtos/UpdatedUser.dto";

@Injectable()
export class UsersService {
  // 将User这个entity注入到此service中，之后此service就和User entity链接起来了；之后我们就可以使用typeORM对db进行CRUD了；
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  // 查询所有user；
  queryAllUsers(){
    return this.userRepo
      .createQueryBuilder('user').getMany()
  }

  // 根据userId查询单个user；
  queryUserById(userId: string){
    return this.userRepo
      .createQueryBuilder('user')
      .where('user.id = :userId', { userId })
      .getOne()
  }

  // 创建user；
  async createUser(user: CreatedUserDto){
    // 创建user；
    const newUser = this.userRepo.create({
      ...user
    })

    const errors = await validate(newUser)

    if(errors.length > 0){
      throw new HttpException('Invalid user info', HttpStatus.BAD_REQUEST)
    }

    // 注意！我们下面不写成await newUser.save()的原因是因为：下面这种写法不需要写async和await；
    return this.userRepo.save(newUser)

  }

  // 更新user；
  async updateUserById(userId: string, updatedUserDto: UpdatedUserDto){

    const { email, password } = updatedUserDto

    const updatedUser: User = this.userRepo.create({
      email,
      password
    })

    const errors = await validate(updatedUser)

    if(errors.length > 0){
      throw new HttpException('Invalid user info', HttpStatus.BAD_REQUEST)
    }

    await this.userRepo.update({ id: userId }, { ...updatedUser })
  }

  async deleteUserById(userId: string){
    await this.userRepo.update({ id: userId }, {
      isDeleted: true
    })
  }
}
