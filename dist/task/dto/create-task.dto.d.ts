import { $Enums, Prisma } from '@prisma/client';
export declare class CreateTaskDto implements Prisma.TaskCreateInput {
    equipment?: Prisma.EquipmentCreateNestedOneWithoutTasksInput;
    title: string;
    priority: $Enums.TaskPriority;
    status: $Enums.TaskStatus;
    location?: string;
    description?: string;
    date_start: string | Date;
    date_end: string | Date;
    team: Prisma.TeamCreateNestedOneWithoutTasksInput;
    team_id: number;
    equipment_id: number;
    users?: Prisma.UserCreateNestedManyWithoutTasksInput;
}
