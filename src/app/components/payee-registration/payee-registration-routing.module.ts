import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayeeRegistrationComponent } from './payee-registration.component';
import { VendorRegistrationComponent } from '../vendor-registration/vendor-registration.component';
const RegistrationRoutes: Routes = [
  {
    path: 'payee-registration',
    component: PayeeRegistrationComponent
  },
  {
    path: 'vendor-registration',
    component: VendorRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(RegistrationRoutes)],
  exports: [RouterModule]
})
export class PayeeRegistrationRoutingModule { }
