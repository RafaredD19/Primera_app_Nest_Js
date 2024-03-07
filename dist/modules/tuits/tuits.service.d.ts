import { CreateTuitDto } from './dto/create-tuit.dto';
import { UpdateTuitDto } from './dto/update-tuit.dto';
export declare class TuitsService {
    create(createTuitDto: CreateTuitDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTuitDto: UpdateTuitDto): string;
    remove(id: number): string;
}
