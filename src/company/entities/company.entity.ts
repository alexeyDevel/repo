import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class Company implements Prisma.CompanyGetPayload<{}> {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier for the company.',
  })
  id: number;

  @ApiProperty({
    example: 'Company Name',
    description: 'The name of the company.',
  })
  name: string;

  @ApiProperty({
    example: 'Company Address',
    description: 'The address of the company.',
  }) // Removed the '?' here
  address: string;

  @ApiProperty({
    example: 'Company Description',
    description: 'The description of the company.',
  })
  description: string;

  created_at: Date;
  updated_at: Date;
}
