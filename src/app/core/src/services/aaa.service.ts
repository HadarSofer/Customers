import { Injectable } from '@angular/core';
import {add} from "../../../utils/eyal";

@Injectable()
export class ConfigService {
  baseUrl : string = "blabla";
  apiKey : string = "123123123";
}



@Injectable()
export class AaaService {

  constructor(private config : ConfigService) { }

  print(){
    let r = add(1,2);
    console.log(`base url : ${this.config.baseUrl}`);
  }
}
