import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayeeDashboardComponent } from './payee-dashboard.component';

const DashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: PayeeDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule]
})
export class PayeeDashboardRoutingModule { }
