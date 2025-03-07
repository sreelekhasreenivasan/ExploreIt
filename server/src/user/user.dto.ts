import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  userType?: string;
}
export class LoginUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;  

  @IsString()
  password: string;
}