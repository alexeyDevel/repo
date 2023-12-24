import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Prisma } from '@prisma/client';
import { IsString, IsEmail, IsOptional, IsDate } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  passwordhash: string;
  roles?: $Enums.Role[];
  created_at?: string | Date;
  updated_at?: string | Date;
  teams?: Prisma.TeamCreateNestedManyWithoutUsersInput;

  @ApiProperty({ example: 'John', description: 'First name of the user' })
  @IsOptional()
  @IsString()
  first_name: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the user' })
  @IsOptional()
  @IsString()
  last_name: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Email address of the user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '89000777979', description: 'Phone of the user' })
  @IsOptional()
  @IsEmail()
  phone: string;

  @ApiProperty({ example: 'password123', description: 'Password of the user' })
  @IsString()
  password: string;

  @ApiProperty({
    example: '1990-01-01T08:00:00Z',
    description: 'Birthdate of the user',
  })
  @IsOptional()
  @IsDate()
  birth_date: Date;

  @ApiProperty({
    example: 'telegram_handle',
    description: 'Telegram handle of the user',
  })
  @IsOptional()
  @IsString()
  telegram: string;
}
