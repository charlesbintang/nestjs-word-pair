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

  create(createWordPairDto: CreateWordPairDto): WordPair {
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

  findAll(
    firstWord?: string,
    secondWord?: string,
    category?: string,
  ): WordPair[] {
    if (!firstWord && !secondWord && !category) {
      return this.wordPairs;
    }

    return this.wordPairs.filter((wp) => {
      const matchFirstWord =
        !firstWord ||
        wp.firstWord.toLowerCase().includes(firstWord.toLowerCase());
      const matchSecondWord =
        !secondWord ||
        wp.secondWord.toLowerCase().includes(secondWord.toLowerCase());
      const matchCategory =
        !category ||
        wp.category?.toLowerCase().includes(category.toLowerCase());

      return matchFirstWord && matchSecondWord && matchCategory;
    });
  }

  findOne(id: string): WordPair {
    const wordPair = this.wordPairs.find((wp) => wp.id === id);
    if (!wordPair) {
      throw new NotFoundException(`WordPair with ID ${id} not found`);
    }
    return wordPair;
  }

  update(id: string, updateWordPairDto: UpdateWordPairDto): WordPair {
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

  remove(id: string): void {
    const index = this.wordPairs.findIndex((wp) => wp.id === id);
    if (index === -1) {
      throw new NotFoundException(`WordPair with ID ${id} not found`);
    }
    this.wordPairs.splice(index, 1);
  }

  removeAll(): void {
    this.wordPairs = [];
  }
}
