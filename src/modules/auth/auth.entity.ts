import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Auth {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  wallet: string;

  @Column()
  signChallenge: string;
  
  @Column({ type: 'timestamptz' })
  createdAt: Date;
  
  // @Column()
  // status: number;

  // @Column({ default: true })
  // isActive: boolean;
}