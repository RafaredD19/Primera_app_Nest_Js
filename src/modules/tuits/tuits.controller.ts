import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { CreateTuitDto } from './dto/create-tuit.dto';
import { UpdateTuitDto } from './dto/update-tuit.dto';
import { get } from 'http';

@Controller('tuits')
export class TuitsController {
  constructor(private readonly tuitsService: TuitsService) {}
  @Get()
  getTuits(){
    return 'gaaa';
  }

  @Get(':id')
  getTuit(@Param() params){
    return 'you id de tuit es ${params.id}';
  }

  @Post()
  create(@Body() createTuitDto: CreateTuitDto) {
    return this.tuitsService.create(createTuitDto);
  }

  @Get()
  findAll() {
    return this.tuitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tuitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTuitDto: UpdateTuitDto) {
    return this.tuitsService.update(+id, updateTuitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tuitsService.remove(+id);
  }
}
