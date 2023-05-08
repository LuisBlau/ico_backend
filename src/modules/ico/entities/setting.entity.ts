import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

export class SectionInfo {
  @Column()
  title: string;
  @Column()
  subtitle: string;
  @Column()
  detail: string;
  @Column()
  file?: string;
}

export class FooterInfo {
  @Column()
  detail: string;
  @Column()
  facebook?: string;
  @Column()
  twitter?: string;
  @Column()
  googleplus?: string;
  @Column()
  instagram?: string;
  @Column()
  linkedin?: string;
}

@Entity({name: "settings"})
export class Setting {
  @ObjectIdColumn()
  _id?: ObjectID;

  @Column()
  logo: string;

  @Column()
  favIcon: string;

  @Column((type) => SectionInfo)
  about: SectionInfo;

  @Column((type) => SectionInfo)
  how: SectionInfo;

  @Column((type) => SectionInfo)
  roadmap: SectionInfo;

  @Column((type) => SectionInfo)
  whitepaper: SectionInfo;

  @Column((type) => SectionInfo)
  tokenomics: SectionInfo;

  @Column((type) => SectionInfo)
  faq: SectionInfo;

  @Column((type) => SectionInfo)
  team: SectionInfo;

  @Column((type) => SectionInfo)
  subscribe: SectionInfo;

  @Column((type) => SectionInfo)
  contact: SectionInfo;

  @Column((type) => SectionInfo)
  main: SectionInfo;

  @Column((type) => FooterInfo)
  footer: FooterInfo;
}