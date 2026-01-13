import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordPairModule } from './wordpair/wordpair.module';

@Module({
  imports: [WordPairModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
