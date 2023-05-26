import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class Champion1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  champion: string;

  @Column()
  img: string;
}
