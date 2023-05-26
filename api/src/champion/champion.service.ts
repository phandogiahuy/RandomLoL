import { Injectable } from '@nestjs/common';
import { CreateChampionDto } from './dto/create-champion.dto';
import { Champion2 } from './entities/champion2.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Champion1 } from './entities/champion1.entity';

@Injectable()
export class ChampionService {
  constructor(
    @InjectRepository(Champion1)
    private championRepository1: Repository<Champion1>,
    @InjectRepository(Champion2)
    private championRepository2: Repository<Champion2>,
  ) {}
  create1(createChampionDto: CreateChampionDto) {
    const champion = this.championRepository1.create(createChampionDto);
    return this.championRepository1.save(champion);
  }
  findAll1() {
    return this.championRepository1.find();
  }
  remove1() {
    return this.championRepository1.clear();
  }
  create2(createChampionDto: CreateChampionDto) {
    const champion = this.championRepository2.create(createChampionDto);
    return this.championRepository2.save(champion);
  }
  findAll2() {
    return this.championRepository2.find();
  }
  remove2() {
    return this.championRepository2.clear();
  }
}
