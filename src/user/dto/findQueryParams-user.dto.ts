import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsInt, IsString } from 'class-validator';
import { IUserQueryParams } from '../interfaces/IUserQueryParams';
import { Prisma } from '@prisma/client';

export class UserQueryParamsDto implements IUserQueryParams {
  @ApiProperty({
    description: 'Number of records to skip for pagination',
    required: false,
    example: 0,
  })
  @IsOptional()
  @IsInt()
  skip?: number;

  @ApiProperty({
    description: 'Number of records to take for pagination',
    required: false,
    example: 10,
  })
  @IsOptional()
  @IsInt()
  take?: number;

  // @ApiProperty({
  //   description: 'Cursor reference for pagination',
  //   required: false,
  //   example: {
  //     id: 2
  //   },
  // })
  // @IsOptional()
  // cursor?: Prisma.UserWhereUniqueInput;

  @ApiProperty({
    description: 'Filter conditions for user search',
    required: false,
    example: '{"first_name": "John"}',
  })
  @IsOptional()
  where?: Prisma.UserWhereInput;

  @ApiProperty({
    description: 'Ordering of the result set (e.g., created_at:desc)',
    required: false,
    example: {
      created_at: 'desc', // Пример сортировки по полю 'createdAt' по убыванию
    },
  })
  @IsOptional()
  orderBy?: Prisma.UserOrderByWithRelationInput;
}
