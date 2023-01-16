import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/authguard.guard';

// Layouts
import { RegistrationLayoutComponent } from './layout/registration-layout/registration-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';


import { DASHBOARD_LAYOUT } from './routes/dashboard-layout-routes';
import { REGISTARTION_LAYOUT } from './routes/registration-layout-routes';

const routes: Routes = [
  {
    path: '',
    component: RegistrationLayoutComponent,
    canActivate:[AuthGuard],
    children: REGISTARTION_LAYOUT
  },
  {
    path:'',
    component: DashboardLayoutComponent,
    children: DASHBOARD_LAYOUT
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
