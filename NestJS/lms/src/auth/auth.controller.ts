import { Controller, Post, Get, Body, Request } from '@nestjs/common';
import { RegisterUserDto } from './dto/registerUser.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/loginUser.dto';
import { AuthGuard } from './auth.guard';
import { UseGuards } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService, private readonly userService: UserService) {}
    
    @Post('register')
    async register(@Body() registerUserDto: RegisterUserDto) {
        const createdUser = await this.authService.register(registerUserDto);
        return createdUser;
    }

     @Get('login')
    async login(@Body() loginDto: LoginUserDto) {
        const loggedInUser = await this.authService.login(loginDto);
        return loggedInUser;
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    async getProfile(@Request() req) {
        console.log("Request user:", req.user);
        const userId = req.user.sub;
        const user = await this.userService.getUserById(userId);
        console.log("User profile:", user);
        return user;
    }

}
