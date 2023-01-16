import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { PayeeDashboardRoutingModule } from './payee-dashboard-routing.module';
import { PayeeDashboardComponent } from './payee-dashboard.component';

import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatComponentsModule } from 'src/app/modules/mat-module.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [PayeeDashboardComponent],
  imports: [
    CommonModule,
    PayeeDashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatComponentsModule,
    MatTabsModule,
  ],
  exports:[PayeeDashboardComponent]
})
export class PayeeDashboardModule { }
