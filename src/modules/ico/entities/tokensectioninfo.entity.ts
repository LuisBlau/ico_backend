import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({name: "token"})
export class TokenSectionInfo {
  @ObjectIdColumn()
  _id?: ObjectID;

  @Column()
  text: string;

  @Column()
  title: string;

  @Column()
  num: number;
}
