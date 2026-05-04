import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './dto/registerUser.dto';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/loginUser.dto';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService,
                private readonly jwtService: JwtService

    ) {}
    async register(registerUserDto: RegisterUserDto) {

        const saletRounds = 10;
        const hashPassword = await bcrypt.hash(registerUserDto.password, saletRounds);
        const createdUser = await this.userService.createUser({...registerUserDto, password: hashPassword});
        
        const payload = { sub: createdUser._id, role: createdUser.role }
        const token = await this.jwtService.signAsync(payload);
        console.log("Generated JWT token:", token);
        return {access_token: token};
       // return {message: "User registered successfully from service"};
    }

    async login(logInUserDto: LoginUserDto) {
        const user = await this.userService.findByEmail(logInUserDto.email);
        console.log("User found:", user);
        if (!user) {
            return {message: "User not found"};
        }
        const hashPassword = await bcrypt.compare(logInUserDto.password, user.password);
        if (!hashPassword) {
            return {message: "Invalid email or password"};
        }

        
        const payload = { sub: user._id, role: user.role }
        const token = await this.jwtService.signAsync(payload);
        console.log("Login JWT token:", token);
        return {access_token: token};
       // return {message: "User registered successfully from service"};
    }


}
