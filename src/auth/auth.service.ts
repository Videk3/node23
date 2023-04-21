import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(private userService: UserService) {

  }

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new NotFoundException("Wrong email");
    }
    if(!(await bcrypt.compare(pass, user.password))){
      throw new BadRequestException("Wrong password");
    }
    return user;
  }
}
