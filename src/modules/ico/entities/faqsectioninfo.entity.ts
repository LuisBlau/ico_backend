import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({name: "faq"})
export class FaqSectionInfo {
  @ObjectIdColumn()
  _id?: ObjectID;

  @Column()
  text: string;

  @Column()
  title: string;

  @Column()
  num: number;
}
