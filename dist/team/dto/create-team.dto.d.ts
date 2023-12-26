import { Prisma } from '@prisma/client';
export declare class CreateTeamDto implements Prisma.TeamCreateInput {
    project: Prisma.ProjectCreateNestedOneWithoutTeamsInput;
    created_at?: string | Date;
    updated_at?: string | Date;
    users?: Prisma.UserCreateNestedManyWithoutTeamsInput;
    readonly name: string;
    readonly team_lead?: string;
    readonly description?: string;
    project_id: number;
}
