import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionModule } from './champion/champion.module';
import { Champion } from './champion/entities/champion.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
      ChampionModule,
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: 'db.sqlite',
        entities: [Champion],
        synchronize: true,
      }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
