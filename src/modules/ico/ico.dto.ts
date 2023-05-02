export class SectionInfo {
    title: string;
    subtitle: string;
    detail: string
}

export class SettingDTO {
    _id: string;
    logo: string;
    about: SectionInfo;
    how: SectionInfo;
    roadmap: SectionInfo;
    whitepaper: SectionInfo;
    tokenomics: SectionInfo;
    faq: SectionInfo;
    team: SectionInfo;
    subscribe: SectionInfo;
    contact: SectionInfo;
}
