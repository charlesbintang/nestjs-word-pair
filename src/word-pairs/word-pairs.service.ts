import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WordPair } from './entities/word-pair.entity';
import { CreateWordPairDto } from './dto/create-word-pair.dto';
import { UpdateWordPairDto } from './dto/update-word-pair.dto';
import { WordPairResponseDto } from './dto/word-pair-response.dto';

@Injectable()
export class WordPairsService {
  constructor(
    @InjectModel(WordPair)
    private readonly wordPairModel: typeof WordPair,
  ) {}

  async create(createWordPairDto: CreateWordPairDto): Promise<WordPairResponseDto> {
    const wordPair = await this.wordPairModel.create({
      word1: createWordPairDto.word1,
      word2: createWordPairDto.word2,
      description: createWordPairDto.description,
    });

    return this.mapToResponseDto(wordPair);
  }

  async findAll(): Promise<WordPairResponseDto[]> {
    const wordPairs = await this.wordPairModel.findAll({
      order: [['createdAt', 'DESC']],
    });

    return wordPairs.map((wp) => this.mapToResponseDto(wp));
  }

  async findOne(id: number): Promise<WordPairResponseDto> {
    const wordPair = await this.wordPairModel.findByPk(id);

    if (!wordPair) {
      throw new NotFoundException(`Word pair with ID ${id} not found`);
    }

    return this.mapToResponseDto(wordPair);
  }

  async update(
    id: number,
    updateWordPairDto: UpdateWordPairDto,
  ): Promise<WordPairResponseDto> {
    const wordPair = await this.wordPairModel.findByPk(id);

    if (!wordPair) {
      throw new NotFoundException(`Word pair with ID ${id} not found`);
    }

    await wordPair.update({
      word1: updateWordPairDto.word1,
      word2: updateWordPairDto.word2,
      description: updateWordPairDto.description,
    });

    return this.mapToResponseDto(wordPair);
  }

  async remove(id: number): Promise<void> {
    const wordPair = await this.wordPairModel.findByPk(id);

    if (!wordPair) {
      throw new NotFoundException(`Word pair with ID ${id} not found`);
    }

    await wordPair.destroy();
  }

  private mapToResponseDto(wordPair: WordPair): WordPairResponseDto {
    return {
      id: wordPair.id,
      word1: wordPair.word1,
      word2: wordPair.word2,
      description: wordPair.description,
      createdAt: wordPair.createdAt,
      updatedAt: wordPair.updatedAt,
    };
  }
}
