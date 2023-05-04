import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({name: "contact"})
export class ContactSectionInfo {
  @ObjectIdColumn()
  _id?: ObjectID;

  @Column()
  css: string;

  @Column()
  field: string;

  @Column()
  display: string;

  @Column()
  isMultiline: boolean;

  @Column()
  num: number;
}
