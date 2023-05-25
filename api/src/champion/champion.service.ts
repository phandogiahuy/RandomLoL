import { Injectable } from '@nestjs/common';
import { CreateChampionDto } from './dto/create-champion.dto';
import { Champion } from './entities/champion.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ChampionService {
  constructor(
    @InjectRepository(Champion) private championRepository: Repository<Champion>,
  ) {}
  create(createChampionDto: CreateChampionDto) {
    const champion = this.championRepository.create(createChampionDto);
    console.log(createChampionDto)
    return this.championRepository.save(champion)
  }
  findAll() {
    return this.championRepository.find()
  }
  remove() {
    return this.championRepository.clear()
  }
}
