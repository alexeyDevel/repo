import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @ApiProperty({
    example: 'Project Name',
    description: 'The name of the project.',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 1, description: 'The ID of the associated company.' })
  @IsNotEmpty()
  company_id?: number;

  @ApiProperty({ example: 'The description.', description: 'The description.' })
  description?: string;
}
