import {
  IsString,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateWordPairDto {
  @IsString()
  @IsOptional()
  @MinLength(1)
  @MaxLength(255)
  word1?: string;

  @IsString()
  @IsOptional()
  @MinLength(1)
  @MaxLength(255)
  word2?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
