import { Module } from '@nestjs/common';
import { WordPairService } from './wordpair.service';
import { WordPairController } from './wordpair.controller';

@Module({
  controllers: [WordPairController],
  providers: [WordPairService],
  exports: [WordPairService],
})
export class WordPairModule {}
