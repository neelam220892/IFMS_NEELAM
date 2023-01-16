import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatComponentsModule } from 'src/app/modules/mat-module.module';
import { MatTabsModule } from '@angular/material/tabs';

import { PayeeRegistrationRoutingModule } from './payee-registration-routing.module';
import { PayeeRegistrationComponent } from './payee-registration.component'; 

@NgModule({
  declarations: [PayeeRegistrationComponent],
  imports: [
    CommonModule,
    PayeeRegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatComponentsModule,
    MatTabsModule,
  ],
  exports:[]
})
export class PayeeRegistrationModule { }
