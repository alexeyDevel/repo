import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Prisma } from '@prisma/client';
import { User } from 'src/user/entities/user.entity';
import { Project } from 'src/project/entities/project.entity';

export class CreateTeamDto implements Prisma.TeamCreateInput {
  project: Prisma.ProjectCreateNestedOneWithoutTeamsInput;
  created_at?: string | Date;
  updated_at?: string | Date;
  @ApiPropertyOptional({
    description: 'Users associated with the team.',
    type: 'UserUncheckedCreateNestedManyWithoutTeamsInput',
    example: {
      connect: [{ id: 1 }, { id: 2 }],
    },
  })
  users?: Prisma.UserCreateNestedManyWithoutTeamsInput;
  @ApiProperty({
    example: 'Example Team Name',
    description: 'Name of the team',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'John Doe', description: 'Team lead of the team' })
  readonly team_lead?: string;

  @ApiProperty({
    example: 'Team description',
    description: 'Description of the team',
  })
  readonly description?: string;

  @ApiProperty({ example: 1, description: 'The ID of the associated project.' })
  @IsNotEmpty()
  project_id: number;
}
