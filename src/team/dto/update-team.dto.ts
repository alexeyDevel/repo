import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt } from 'class-validator';
import { CreateTeamDto } from './create-team.dto';
import { Prisma } from '@prisma/client';

export class UpdateTeamDto implements Prisma.TeamUpdateInput {
  @ApiProperty({
    example: 'Updated Team Name',
    description: 'Updated name of the team (if applicable)',
  })
  @IsOptional()
  @IsString()
  readonly name?: string;

  @ApiProperty({
    example: 'Updated Team team_lead',
    description: 'Updated team_lead of the team (if applicable)',
  })
  @IsOptional()
  @IsString()
  team_lead?: string;

  @ApiProperty({
    example: 'Updated Team description',
    description: 'Updated description of the team (if applicable)',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 1, description: 'The ID of the associated project.' })
  project_id?: number;

  @ApiPropertyOptional({
    description: 'Users associated with the team.',
    type: 'UserUncheckedCreateNestedManyWithoutTeamsInput',
    example: {
      connect: [{ id: 1 }, { id: 2 }] /* UserWhereUniqueInput */,
    },
  })
  users?: Prisma.UserUncheckedCreateNestedManyWithoutTeamsInput;
}
