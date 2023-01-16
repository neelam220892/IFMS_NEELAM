import { Injectable } from '@angular/core';
import * as datahi from '../translations/translation_hi.json'
import * as dataen from '../translations/translation_en.json'
@Injectable({
  providedIn: 'root'
})
export class CommonService {
LanType:any="EN";
lanJson:any;
  constructor() {
    this.lanJson=dataen;
    console.log(this.lanJson);
   }
  languageHindiChange()
  {
         this.LanType="HI";
         this.lanJson=datahi;
         console.log(this.lanJson);
         
  }
  languageEngChange()
  {
         this.LanType="EN";
         this.lanJson=dataen;
         console.log(this.lanJson);
  }
}
