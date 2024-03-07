import { TuitsService } from './tuits.service';
import { CreateTuitDto } from './dto/create-tuit.dto';
import { UpdateTuitDto } from './dto/update-tuit.dto';
export declare class TuitsController {
    private readonly tuitsService;
    constructor(tuitsService: TuitsService);
    getTuits(): string;
    getTuit(params: any): string;
    create(createTuitDto: CreateTuitDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTuitDto: UpdateTuitDto): string;
    remove(id: string): string;
}
