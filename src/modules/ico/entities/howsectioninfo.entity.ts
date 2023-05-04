import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({name: "how"})
export class HowSectionInfo {
  @ObjectIdColumn()
  _id?: ObjectID;

  @Column()
  img: string;

  @Column()
  num: number;

  @Column()
  title: string;

  @Column()
  text: string;
}
