import { Module } from '@nestjs/common';
import { ChampionService } from './champion.service';
import { ChampionController } from './champion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Champion1 } from './entities/champion1.entity';
import { Champion2 } from './entities/champion2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Champion1, Champion2])],
  controllers: [ChampionController],
  providers: [ChampionService],
})
export class ChampionModule {}
