import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from "../user/user.module";
import { User } from "../entities/user.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from "../user/user.service";
import { LocalStrategy } from "./strategies/local.strategy";

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([User])],
  providers: [AuthService, UserService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
