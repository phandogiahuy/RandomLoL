import { Module } from '@nestjs/common';
import { ChampionService } from './champion.service';
import { ChampionController } from './champion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Champion } from './entities/champion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Champion]),
  ],
  controllers: [ChampionController],
  providers: [ChampionService],
})
export class ChampionModule {}
