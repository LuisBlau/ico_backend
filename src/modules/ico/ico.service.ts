import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { Setting } from './entities/setting.entity';
import {SettingDTO} from './ico.dto';
@Injectable()
export class ICOService {
  constructor(@InjectRepository(Setting) private settingRepository: Repository<Setting>) {

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
    console.log(sectionInfo);
    let setting = await this.settingRepository.findOne({});
    if (!setting) {
      setting = {
        "logo" : "",
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
        }
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
}
