import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWordPairDto {
  @IsString()
  @IsNotEmpty()
  clientId!: string;

  @IsString()
  @IsNotEmpty()
  firstWord!: string;

  @IsString()
  @IsNotEmpty()
  secondWord!: string;

  @IsString()
  @IsNotEmpty()
  category!: string;
}
