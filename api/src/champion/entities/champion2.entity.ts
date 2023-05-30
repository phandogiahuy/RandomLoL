import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class Champion2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  champion: string;

  @Column()
  img: string;
  // @Column()
  // item_1: string
  // @Column()
  // item_2: string
  // @Column()
  // item_3: string
  // @Column()
  // item_4: string
  // @Column()
  // item_5: string
  // @Column()
  // item_6: string
}


