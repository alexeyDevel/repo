import { Prisma } from '@prisma/client';
export declare class UpdateTeamDto implements Prisma.TeamUpdateInput {
    readonly name?: string;
    team_lead?: string;
    description?: string;
    project_id?: number;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTeamsInput;
}
