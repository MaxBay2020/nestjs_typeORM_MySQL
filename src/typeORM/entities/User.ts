import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsEmail } from "class-validator";
import BaseClass from "./BaseClass";

@Entity('user')
class User extends BaseClass{

  @Column({
    unique: true
  })
  @IsEmail()
  email: string

  @Column()
  password: string

}

export default User
