import { Injectable } from '@nestjs/common';
import { CreateTuitDto } from './dto/create-tuit.dto';
import { UpdateTuitDto } from './dto/update-tuit.dto';

@Injectable()
export class TuitsService {
  create(createTuitDto: CreateTuitDto) {
    return 'This action adds a new tuit';
  }

  findAll() {
    return `This action returns all tuits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tuit`;
  }

  update(id: number, updateTuitDto: UpdateTuitDto) {
    return `This action updates a #${id} tuit`;
  }

  remove(id: number) {
    return `This action removes a #${id} tuit`;
  }
}
