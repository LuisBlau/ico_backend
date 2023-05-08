import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { Setting } from './entities/setting.entity';
import {SettingDTO} from './ico.dto';
import { HowSectionInfo } from './entities/howsectioninfo.entity';
import { TeamSectionInfo } from './entities/teamsectioninfo.entity';
import { RoadmapSectionInfo } from './entities/roadmapsectioninfo.entity';
import { FaqSectionInfo } from './entities/faqsectioninfo.entity';
import { ContactSectionInfo } from './entities/contactsectioninfo.entity';
import { TokenSectionInfo } from './entities/tokensectioninfo.entity';
import { FooterSectionInfo } from './entities/footersectioninfo.entity';
@Injectable()
export class ICOService {
  constructor(
    @InjectRepository(Setting) private settingRepository: Repository<Setting>,
    @InjectRepository(HowSectionInfo) private howSectionRepository: Repository<HowSectionInfo>,
    @InjectRepository(TeamSectionInfo) private teamSectionRepository: Repository<TeamSectionInfo>,
    @InjectRepository(RoadmapSectionInfo) private roadmapSectionRepository: Repository<RoadmapSectionInfo>,
    @InjectRepository(FaqSectionInfo) private faqSectionRepository: Repository<FaqSectionInfo>,
    @InjectRepository(ContactSectionInfo) private contactSectionRepository: Repository<ContactSectionInfo>,
    @InjectRepository(TokenSectionInfo) private tokenSectionRepository: Repository<TokenSectionInfo>,
    @InjectRepository(FooterSectionInfo) private footerSectionRepository: Repository<FooterSectionInfo>
  ) {

  }
  startSale(): string {
    return 'startSale';
  }
  stopSale(): string {
    return 'stopSale';
  }

  collectTokens(): string {
    //NOTE: after ico ends
    return 'collectTokens';
  }
  collectBalance(): string {
    //NOTE: any time
    return 'collectAmount';
  }

  async saveSetting(sectionInfo: any) {
    let setting = await this.settingRepository.findOne({});
    if (!setting) {
      setting = {
        "logo" : "",
        "favIcon" : "",
        "about" : {
            "title" : "About Crypto eComerce",
            "subtitle" : "Decenteralized Crypto eComerce",
            "detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid alias beatae reprehenderit incidunt iusto laboriosam."
        },
        "how" : {
            "title" : "How To Start",
            "subtitle" : "How It Works",
            "detail" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit."
        },
        "roadmap" : {
            "title" : "ICO Roadmap",
            "subtitle" : "Our ICO Roadmap",
            "detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
        },
        "whitepaper" : {
            "title" : "Our ICO Whitepaper",
            "subtitle" : "Downoad Our Whitepaper",
            "detail" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore qui iste asperiores harum maiores praesentium facere ullam blanditiis, odio dolorum. Officia quisquam eaque suscipit facere ducimus, sit quaerat. Numquam, corrupti?"
        },
        "tokenomics" : {
            "title" : "About Our Token",
            "subtitle" : "Our Token Info",
            "detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
        },
        "faq" : {
            "title" : "Token FAQ",
            "subtitle" : "Frequently Questions",
            "detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
        },
        "team" : {
            "title" : "Our Team",
            "subtitle" : "Awesome Team",
            "detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
        },
        "subscribe" : {
            "title" : "Don’t Miss ICO News And Updates!",
            "subtitle" : "",
            "detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
        },
        "contact" : {
            "title" : "Contact us",
            "subtitle" : "Contact With Us",
            "detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
        },
        "main": {
          "title" : "Initial Coin Offering",
          "subtitle" : "Crypto ICO Project",
          "detail" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. "
        },
        "footer": {
          "title" : "",
          "subtitle" : "",
          "detail" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. "
        },
      }
    }
    setting._id && (setting._id = new ObjectID(setting._id));
    setting[Object.keys(sectionInfo)[0]] = Object.values(sectionInfo)[0];
    const res = await this.settingRepository.save(setting);
    return res;
  }

  async getSetting() {
    const setting = await this.settingRepository.findOne({});
    if (setting) {
      return setting;
    }
    return {};
  }

  async getHowSectionInfo() {
    let documents = await this.howSectionRepository.find({});
    return documents;
  }

  async addHowSectionInfo(payload: any) {
    const res = await this.howSectionRepository.save(payload);
    return res;
  }

  async updateHowSectionInfo(id: string, payload: any) {
    let query = {
      where: {
        _id: new ObjectID(id),
      },
    };
    let document = await this.howSectionRepository.findOne(query);
    if (document) {
      const res = await this.howSectionRepository.save({...payload, _id: document._id});
      return res;
    }

    return null;
  }

  async deleteHowSectionInfo(id: string) {
    let result = await this.howSectionRepository.delete(new ObjectID(id));
    return result;
  }

  async getTeamSectionInfo() {
    let documents = await this.teamSectionRepository.find({});
    return documents;
  }

  async addTeamSectionInfo(payload: any) {
    const res = await this.teamSectionRepository.save(payload);
    return res;
  }

  async updateTeamSectionInfo(id: string, payload: any) {
    let query = {
      where: {
        _id: new ObjectID(id),
      },
    };
    let document = await this.teamSectionRepository.findOne(query);
    if (document) {
      const res = await this.teamSectionRepository.save({...payload, _id: document._id});
      return res;
    }

    return null;
  }

  async deleteTeamSectionInfo(id: string) {
    let result = await this.teamSectionRepository.delete(new ObjectID(id));
    return result;
  }

  async getRoadmapSectionInfo() {
    let documents = await this.roadmapSectionRepository.find({});
    return documents;
  }

  async addRoadmapSectionInfo(payload: any) {
    const res = await this.roadmapSectionRepository.save(payload);
    return res;
  }

  async updateRoadmapSectionInfo(id: string, payload: any) {
    let query = {
      where: {
        _id: new ObjectID(id),
      },
    };
    let document = await this.roadmapSectionRepository.findOne(query);
    if (document) {
      const res = await this.roadmapSectionRepository.save({...payload, _id: document._id});
      return res;
    }

    return null;
  }

  async deleteRoadmapSectionInfo(id: string) {
    let result = await this.roadmapSectionRepository.delete(new ObjectID(id));
    return result;
  }

  async getFaqSectionInfo() {
    let documents = await this.faqSectionRepository.find({});
    return documents;
  }

  async addFaqSectionInfo(payload: any) {
    const res = await this.faqSectionRepository.save(payload);
    return res;
  }

  async updateFaqSectionInfo(id: string, payload: any) {
    let query = {
      where: {
        _id: new ObjectID(id),
      },
    };
    let document = await this.faqSectionRepository.findOne(query);
    if (document) {
      const res = await this.faqSectionRepository.save({...payload, _id: document._id});
      return res;
    }

    return null;
  }

  async deleteFaqSectionInfo(id: string) {
    let result = await this.faqSectionRepository.delete(new ObjectID(id));
    return result;
  }

  async getContactSectionInfo() {
    let documents = await this.contactSectionRepository.find({});
    return documents;
  }

  async addContactSectionInfo(payload: any) {
    const res = await this.contactSectionRepository.save(payload);
    return res;
  }

  async updateContactSectionInfo(id: string, payload: any) {
    let query = {
      where: {
        _id: new ObjectID(id),
      },
    };
    let document = await this.contactSectionRepository.findOne(query);
    if (document) {
      const res = await this.contactSectionRepository.save({...payload, _id: document._id});
      return res;
    }

    return null;
  }

  async deleteContactSectionInfo(id: string) {
    let result = await this.contactSectionRepository.delete(new ObjectID(id));
    return result;
  }

  async getTokenSectionInfo() {
    let documents = await this.tokenSectionRepository.find({});
    return documents;
  }

  async addTokenSectionInfo(payload: any) {
    const res = await this.tokenSectionRepository.save(payload);
    return res;
  }

  async updateTokenSectionInfo(id: string, payload: any) {
    let query = {
      where: {
        _id: new ObjectID(id),
      },
    };
    let document = await this.tokenSectionRepository.findOne(query);
    if (document) {
      const res = await this.tokenSectionRepository.save({...payload, _id: document._id});
      return res;
    }

    return null;
  }

  async deleteTokenSectionInfo(id: string) {
    let result = await this.tokenSectionRepository.delete(new ObjectID(id));
    return result;
  }

  async getFooterSectionInfo() {
    let documents = await this.footerSectionRepository.find({});
    return documents;
  }

  async addFooterSectionInfo(payload: any) {
    const res = await this.footerSectionRepository.save(payload);
    return res;
  }

  async updateFooterSectionInfo(id: string, payload: any) {
    let query = {
      where: {
        _id: new ObjectID(id),
      },
    };
    let document = await this.footerSectionRepository.findOne(query);
    if (document) {
      const res = await this.footerSectionRepository.save({...payload, _id: document._id});
      return res;
    }

    return null;
  }

  async deleteFooterSectionInfo(id: string) {
    let result = await this.footerSectionRepository.delete(new ObjectID(id));
    return result;
  }
}
