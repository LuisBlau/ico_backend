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
  link1: string;

  @Column()
  link2: string;

  @Column()
  link3: string;

  @Column()
  link4: string;

  @Column()
  link5: string;

  @Column()
  classBlock: string;

  @Column()
  classInfo: string;

  @Column()
  num: number;
}
