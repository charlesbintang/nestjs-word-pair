import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWordPairDto {
  @IsString()
  @IsNotEmpty()
  firstWord!: string;

  @IsString()
  @IsNotEmpty()
  secondWord!: string;

  @IsString()
  @IsOptional()
  category?: string;
}
