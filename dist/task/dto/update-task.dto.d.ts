import { $Enums, Prisma } from '@prisma/client';
export declare class UpdateTaskDto implements Prisma.TaskUpdateInput {
    title?: string;
    priority?: $Enums.TaskPriority;
    status?: $Enums.TaskStatus;
    location?: string;
    description?: string;
    date_start?: string | Date;
    date_end?: string | Date;
    team_id: number;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTeamsInput;
    equipment_id?: number;
}
