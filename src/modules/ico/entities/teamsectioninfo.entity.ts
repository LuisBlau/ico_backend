import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({name: "team"})
export class TeamSectionInfo {
  @ObjectIdColumn()
  _id?: ObjectID;

  @Column()
  img: string;

  @Column()
  title: string;

  @Column()
  text: string;
}
