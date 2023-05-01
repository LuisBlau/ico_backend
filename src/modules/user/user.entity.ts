import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity("users")
export class User {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  wallet: string;


}