import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTaskDto: Prisma.TaskCreateInput): Promise<Task>;
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.TaskWhereUniqueInput;
        where?: Prisma.TaskWhereInput;
        orderBy?: Prisma.TaskOrderByWithRelationInput;
    }): Promise<Task[]>;
    findOne(TaskWhereUniqueInput: Prisma.TaskWhereUniqueInput): Promise<Task>;
    update(params: {
        where: Prisma.TaskWhereUniqueInput;
        data: Prisma.TaskUpdateInput;
    }): Promise<{
        team: {
            id: number;
            name: string;
            created_at: Date;
            updated_at: Date;
            team_lead: string;
            description: string;
            project_id: number;
        };
        users: {
            id: number;
            email: string;
            phone: string;
            first_name: string;
            last_name: string;
            birth_date: Date;
            telegram: string;
            roles: import(".prisma/client").$Enums.Role[];
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        id: number;
        title: string;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        location: string;
        description: string;
        date_start: Date;
        date_end: Date;
        team_id: number;
        equipment_id: number;
    }>;
    remove(where: Prisma.TaskWhereUniqueInput): Promise<Task>;
}
