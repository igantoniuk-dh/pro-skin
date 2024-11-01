import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';

@Module({
    controllers: [UserController],
    providers: [JwtService, UserService],
})
export class UserModule {}
