import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class Champion1 {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  champion: string;
  @Column()
  img: string;
  @Column()
  item_1: string;
  @Column()
  item_2: string;
  @Column()
  item_3: string;
  @Column()
  item_4: string;
  @Column()
  item_5: string;
  @Column()
  item_6: string;
  // @Column()
  // item_7: string;
  // @Column()
  // item_8: string;
  // @Column()
  // item_9: string;
  // @Column()
  // item_10: string;
  // @Column()
  // item_11: string;
  // @Column()
  // item_12: string;
  // @Column()
  // item_13: string;
  // @Column()
  // item_14: string;
  // @Column()
  // item_15: string;
  // @Column()
  // item_16: string;
  // @Column()
  // item_17: string;
  // @Column()
  // item_18: string;
}
