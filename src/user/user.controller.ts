import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  testiram() {
    return 'VSŠ GET';
  }
  @Post()
  testiramPOST() {
    return 'VSŠ POST';
  }
}
