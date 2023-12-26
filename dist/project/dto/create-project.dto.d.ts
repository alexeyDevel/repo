import { Prisma } from '@prisma/client';
export declare class CreateProjectDto implements Prisma.ProjectCreateInput {
    company: Prisma.CompanyCreateNestedOneWithoutProjectsInput;
    teams?: Prisma.TeamCreateNestedManyWithoutProjectInput;
    name: string;
    company_id?: number;
    description?: string;
}
