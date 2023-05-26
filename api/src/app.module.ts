import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionModule } from './champion/champion.module';
import { ConfigModule } from '@nestjs/config';
import { Champion2 } from './champion/entities/champion2.entity';
import { Champion1 } from './champion/entities/champion1.entity';

@Module({
  imports: [
    ChampionModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Champion1, Champion2],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
