import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsOptional } from 'class-validator';

export class CompanyQueryParams {
  @ApiProperty({
    name: 'skip',
    description: 'Number of items to skip for pagination.',
    required: false,
  })
  @IsOptional()
  skip?: number;

  @ApiProperty({
    name: 'take',
    description: 'Number of items to take for pagination.',
    required: false,
  })
  @IsOptional()
  take?: number;

  @ApiProperty({
    name: 'cursor',
    description: 'Unique identifier for cursor-based pagination.',
    required: false,
  })
  @IsOptional()
  cursor?: Prisma.CompanyWhereUniqueInput;

  @ApiProperty({
    name: 'where',
    description: 'Filter conditions for Company.',
    required: false,
  })
  @IsOptional()
  where?: Prisma.CompanyWhereInput;

  @ApiProperty({
    description: 'Ordering of the result set (e.g., created_at:desc)',
    required: false,
    example: {
      name: 'desc',
    },
  })
  @IsOptional()
  orderBy?: Prisma.CompanyOrderByWithRelationInput;
}
