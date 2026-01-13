import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWordPairDto } from './dto/create-wordpair.dto';
import { UpdateWordPairDto } from './dto/update-wordpair.dto';
import { WordPair } from './entities/wordpair.entity';

@Injectable()
export class WordPairService {
  private wordPairs: WordPair[] = [];

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  async create(createWordPairDto: CreateWordPairDto): Promise<WordPair> {
    const newWordPair: WordPair = {
      id: this.generateId(),
      ...createWordPairDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.wordPairs.push(newWordPair);
    console.log(newWordPair);
    return newWordPair;
  }

  async findAll(): Promise<WordPair[]> {
    return this.wordPairs;
  }

  async findOne(id: string): Promise<WordPair> {
    const wordPair = this.wordPairs.find((wp) => wp.id === id);
    if (!wordPair) {
      throw new NotFoundException(`WordPair with ID ${id} not found`);
    }
    return wordPair;
  }

  async update(id: string, updateWordPairDto: UpdateWordPairDto): Promise<WordPair> {
    const index = this.wordPairs.findIndex((wp) => wp.id === id);
    if (index === -1) {
      throw new NotFoundException(`WordPair with ID ${id} not found`);
    }
    this.wordPairs[index] = {
      ...this.wordPairs[index],
      ...updateWordPairDto,
      updatedAt: new Date(),
    };
    return this.wordPairs[index];
  }

  async remove(id: string): Promise<void> {
    const index = this.wordPairs.findIndex((wp) => wp.id === id);
    if (index === -1) {
      throw new NotFoundException(`WordPair with ID ${id} not found`);
    }
    this.wordPairs.splice(index, 1);
  }

  async removeAll(): Promise<void> {
    this.wordPairs = [];
  }
}
