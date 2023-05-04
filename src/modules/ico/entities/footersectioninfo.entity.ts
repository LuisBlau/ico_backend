import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({name: "footer"})
export class FooterSectionInfo {
  @ObjectIdColumn()
  _id?: ObjectID;

  @Column()
  title: string;

  @Column()
  text1: string;

  @Column()
  text2: string;

  @Column()
  text3: string;

  @Column()
  text4: string;

  @Column()
  text5: string;

  @Column()
  classBlock: string;

  @Column()
  classInfo: string;

  @Column()
  num: number;
}
