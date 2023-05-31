import { IsArray, IsOptional, IsString } from 'class-validator';
export class CreateChampionDto {
  @IsString()
  champion: string;
  @IsString()
  img: string;
  @IsString()
  item: string;
  @IsOptional()
  item_1: string;
  @IsOptional()
  item_2: string;
  @IsOptional()
  item_3: string;
  @IsOptional()
  item_4: string;
  @IsOptional()
  item_5: string;
  @IsOptional()
  item_6: string;
  @IsOptional()
  item_7: string;
  @IsOptional()
  item_8: string;
  @IsOptional()
  item_9: string;
  @IsOptional()
  item_10: string;
  @IsOptional()
  item_11: string;
  @IsOptional()
  item_12: string;
  @IsOptional()
  item_13: string;
  @IsOptional()
  item_14: string;
  @IsOptional()
  item_15: string;
  @IsOptional()
  item_16: string;
  @IsOptional()
  item_17: string;
  @IsOptional()
  item_18: string;
}
