import { IsEmail, IsNotEmpty } from "class-validator";

class UpdatedUserDto{
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  password: string
}

export default UpdatedUserDto