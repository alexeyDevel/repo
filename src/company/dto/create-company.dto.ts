import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty({
    example: 'Company Name',
    description: 'The name of the company.',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Company Address',
    description: 'The address of the company.',
    required: false,
  })
  @IsOptional()
  address?: string;

  @ApiProperty({
    example: 'Company Description',
    description: 'The description of the company.',
  })
  @IsNotEmpty()
  description?: string;
}
