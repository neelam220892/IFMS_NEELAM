import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
@Component({
  selector: 'app-payee-questionnaire',
  templateUrl: './payee-questionnaire.component.html',
  styleUrls: ['./payee-questionnaire.component.css']
})
export class PayeeQuestionnaireComponent implements OnInit {
  IsPanCard : string = 'Yes';
  panNo: string = '';
  IsVerified: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectPanCard(data: MatRadioChange){
    this.IsPanCard = data.value;
    console.log(this.IsPanCard);
  }

  PanService()
  {
    var pan=this.panNo.toString().length;
    console.log(pan)
    if(pan==10)
    {
      console.log("Function Called");
    }
  }
}
