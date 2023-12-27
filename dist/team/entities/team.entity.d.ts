import { User } from '@prisma/client';
export declare class Team {
    id: number;
    created_at: Date;
    updated_at: Date;
    team_lead: string;
    description: string;
    project_id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    users: User[];
}
