import { IsString, IsOptional } from 'class-validator';

export class UpdateWordPairDto {
  @IsString()
  @IsOptional()
  firstWord?: string;

  @IsString()
  @IsOptional()
  secondWord?: string;

  @IsString()
  @IsOptional()
  category?: string;
}
