import { BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

class BaseClass extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column({
    nullable: true,
    default: true
  })
  isActive: boolean

  @Column({
    nullable: true,
    default: false
  })
  isDeleted: boolean
}

export default BaseClass