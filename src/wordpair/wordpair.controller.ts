import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateWordPairDto } from './dto/create-wordpair.dto';
import { UpdateWordPairDto } from './dto/update-wordpair.dto';
import { WordPairService } from './wordpair.service';

@Controller('wordpairs')
export class WordPairController {
  constructor(private readonly wordPairService: WordPairService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createWordPairDto: CreateWordPairDto) {
    return this.wordPairService.create(createWordPairDto);
  }

  @Get()
  findAll(
    @Query('firstWord') firstWord?: string,
    @Query('secondWord') secondWord?: string,
    @Query('category') category?: string,
  ) {
    return this.wordPairService.findAll(firstWord, secondWord, category);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wordPairService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWordPairDto: UpdateWordPairDto,
  ) {
    return this.wordPairService.update(id, updateWordPairDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.wordPairService.remove(id);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAll() {
    return this.wordPairService.removeAll();
  }
}
