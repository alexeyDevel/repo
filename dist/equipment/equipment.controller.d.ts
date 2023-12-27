import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { Equipment } from '@prisma/client';
import { EquipmentQueryParams } from './dto/equipment-query-params.dto';
export declare class EquipmentController {
    private readonly equipmentService;
    constructor(equipmentService: EquipmentService);
    create(createEquipmentDto: CreateEquipmentDto): Promise<Equipment>;
    findAll(params?: EquipmentQueryParams): Promise<Equipment[]>;
    findOne(id: string): Promise<Equipment>;
    update(id: string, updateEquipmentDto: UpdateEquipmentDto, request: any): Promise<Equipment>;
    remove(id: string): Promise<Equipment>;
}
