import { CreateProjectDto } from './create-project.dto';
declare const UpdateProjectDto_base: import("@nestjs/common").Type<Partial<CreateProjectDto>>;
export declare class UpdateProjectDto extends UpdateProjectDto_base {
    name: string;
    company_id?: number;
    description?: string;
}
export {};
