import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({name: "roadmap"})
export class RoadmapSectionInfo {
  @ObjectIdColumn()
  _id?: ObjectID;

  @Column()
  year: string;

  @Column()
  title: string;

  @Column()
  monthDate: string;

  @Column()
  text: string;
}
