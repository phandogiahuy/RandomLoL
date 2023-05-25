import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChampionService } from './champion.service';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';

@Controller('champion')
export class ChampionController {
  constructor(private readonly championService: ChampionService) {}

  @Post()
  async create(@Body() createChampionDto: CreateChampionDto) {
    return await this.championService.create(createChampionDto);
  }

  @Get()
  findAll() {
    return this.championService.findAll();
  }
  @Delete()
  remove() {
    return this.championService.remove();
  }

}
