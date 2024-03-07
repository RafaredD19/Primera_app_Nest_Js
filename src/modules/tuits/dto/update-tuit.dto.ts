import { PartialType } from '@nestjs/mapped-types';
import { CreateTuitDto } from './create-tuit.dto';

export class UpdateTuitDto extends PartialType(CreateTuitDto) {}
