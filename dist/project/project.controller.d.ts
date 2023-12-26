import { ProjectService } from './project.service';
import { Project } from '@prisma/client';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectQueryParams } from './dto/project-query-params.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    create(createProjectDto: CreateProjectDto): Promise<Project>;
    findAll(request: any, params?: ProjectQueryParams): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<Project>;
    remove(id: string): Promise<Project>;
}
