import { IsArray, IsString } from 'class-validator';
export class CreateChampionDto {
    @IsString()
    champion:string
    @IsString()
    img:string
    @IsString()
    item:string
//      @IsString()
//   item_1: string
//    @IsString()
//   item_2: string
//    @IsString()
//   item_3: string
//    @IsString()
//   item_4: string
//    @IsString()
//   item_5: string
//    @IsString()
//   item_6: string
}
