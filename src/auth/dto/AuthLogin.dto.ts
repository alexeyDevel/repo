import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto implements IAuthLogin {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
