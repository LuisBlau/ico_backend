import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({name: "contact"})
export class ContactSectionInfo {
  @ObjectIdColumn()
  _id?: ObjectID;

  @Column()
  ClassUp: string;

  @Column()
  nameInput: string;

  @Column()
  title: string;

  @Column()
  addTextArea: boolean;
}
