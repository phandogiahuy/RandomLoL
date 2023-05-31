import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChampionService } from './champion.service';
import { CreateChampionDto } from './dto/create-champion.dto';
@Controller('champion')
export class ChampionController {
  constructor(private readonly championService: ChampionService) {}

  @Post('/1')
  async create1(@Body() createChampionDto: CreateChampionDto) {
    return await this.championService.create1(createChampionDto);
  }

  @Get('/1')
  async findAll1() {
   return this.championService.findAll1()
  }
  @Delete('/1')
  remove1() {
    return this.championService.remove1();
  }
  @Post('/2')
  create2(@Body() createChampionDto: CreateChampionDto) {
    return this.championService.create2(createChampionDto);
  }
  @Get('/2')
  findAll2() {
    return this.championService.findAll2();
  }
  @Delete('/2')
  remove2() {
    return this.championService.remove2();
  }
}
