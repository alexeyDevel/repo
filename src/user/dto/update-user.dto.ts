import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { $Enums, Prisma } from '@prisma/client';
import { IsString, IsEmail, IsOptional, IsDate } from 'class-validator';

export class UpdateUserDto implements Prisma.UserUpdateInput {
  passwordhash: string;
  roles?: $Enums.Role[];

  @ApiProperty({ example: 'John', description: 'First name of the user' })
  @IsOptional()
  @IsString()
  first_name?: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the user' })
  @IsOptional()
  @IsString()
  last_name?: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Updated email address of the user (if applicable)',
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ example: '89000777979', description: 'Phone of the user' })
  @IsOptional()
  @IsEmail()
  phone?: string;

  @ApiProperty({
    example: '1990-01-01T08:00:00Z',
    description: 'Birthdate of the user',
  })
  @IsOptional()
  @IsDate()
  birth_date?: Date;

  @ApiProperty({
    example: 'updated_telegram_handle',
    description: 'Updated Telegram handle of the user (if applicable)',
  })
  @IsOptional()
  @IsString()
  telegram?: string;

  @ApiPropertyOptional({
    description: 'User IDs associated with the team.',
    type: [Number], // указываем тип элементов массива
    example: [1, 2, 3], // пример массива идентификаторов
  })
  users?: Prisma.UserCreateNestedManyWithoutTeamsInput['connect'];
}
