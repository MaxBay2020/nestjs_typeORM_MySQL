import { IsEmail, IsNotEmpty } from "class-validator";

class CreatedUserDto{
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  password: string
}

export default CreatedUserDto