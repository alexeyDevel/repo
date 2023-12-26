import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from '@prisma/client';
import { CompanyQueryParams } from './dto/company-query-params.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findAll(params?: CompanyQueryParams): Promise<import("./entities/company.entity").Company[]>;
    findOne(id: string): Promise<import("./entities/company.entity").Company>;
    update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<import("./entities/company.entity").Company>;
    remove(id: string): Promise<import("./entities/company.entity").Company>;
}
