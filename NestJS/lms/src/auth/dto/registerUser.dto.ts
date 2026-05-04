import { IsEmail, IsEnum, IsString, isEmail} from 'class-validator';
import { Role } from 'src/user/user.types';

export class RegisterUserDto {
    @IsString()
    fname: string;
    @IsString()
    lname: string;
    @IsEmail()
    email: string;
    @IsString()
    password: string;
    @IsEnum([Role.Student, Role.Admin], {message: 'Role must be either student or admin'})
    role: string;

}