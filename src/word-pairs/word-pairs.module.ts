import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WordPairsService } from './word-pairs.service';
import { WordPairsController } from './word-pairs.controller';
import { WordPair } from './entities/word-pair.entity';

@Module({
  imports: [SequelizeModule.forFeature([WordPair])],
  controllers: [WordPairsController],
  providers: [WordPairsService],
  exports: [WordPairsService],
})
export class WordPairsModule {}
