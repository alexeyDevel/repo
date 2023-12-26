import { Company } from 'src/company/entities/company.entity';
import { Team } from 'src/team/entities/team.entity';
export declare class Project {
    id: number;
    name: string;
    description: string;
    created_at: Date;
    updated_at?: Date;
    company_id: number;
    company: Company;
    teams: Team[];
}
