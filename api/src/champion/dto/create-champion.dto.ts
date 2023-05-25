import { IsString } from 'class-validator';
export class CreateChampionDto {
    @IsString()
    champion:string
    @IsString()
    img:string


}
