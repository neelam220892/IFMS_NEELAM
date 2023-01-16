import { Routes } from '@angular/router';

export const REGISTARTION_LAYOUT: Routes = [
    {path: '', loadChildren:() => import('../components/payee-registration/payee-registration.module').then(r => r.PayeeRegistrationModule)}
]