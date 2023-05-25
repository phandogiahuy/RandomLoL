import { PrimaryGeneratedColumn,Column,Entity } from 'typeorm';
@Entity()
export class Champion {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    champion: string;
  
    @Column()
    img: string;
}
