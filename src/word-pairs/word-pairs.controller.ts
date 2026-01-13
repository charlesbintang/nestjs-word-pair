import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { WordPairsService } from './word-pairs.service';
import { CreateWordPairDto } from './dto/create-word-pair.dto';
import { UpdateWordPairDto } from './dto/update-word-pair.dto';
import { WordPairResponseDto } from './dto/word-pair-response.dto';

@Controller('word-pairs')
export class WordPairsController {
  constructor(private readonly wordPairsService: WordPairsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createWordPairDto: CreateWordPairDto,
  ): Promise<WordPairResponseDto> {
    return this.wordPairsService.create(createWordPairDto);
  }

  @Get()
  async findAll(): Promise<WordPairResponseDto[]> {
    return this.wordPairsService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<WordPairResponseDto> {
    return this.wordPairsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateWordPairDto: UpdateWordPairDto,
  ): Promise<WordPairResponseDto> {
    return this.wordPairsService.update(id, updateWordPairDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.wordPairsService.remove(id);
  }
}
