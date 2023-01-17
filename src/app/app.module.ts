import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// ng package Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { NgOtpInputModule } from  'ng-otp-input';

// custom Modules
import { MatComponentsModule } from './modules/mat-module.module';
import { SharedModule } from './shared/shared.module';


import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { FooterLandingComponent } from './components/footer-landing/footer-landing.component';
import { StyleguideComponent } from './components/styleguide/styleguide.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { AttachfileComponent } from './components/attachfile/attachfile.component';
import { EmployeeServiceDetailsComponent } from './components/employee-service-details/employee-service-details.component';
import { SteperComponent } from './components/steper/steper.component';
// import { SearchdropdownComponent } from './searchdropdown/searchdropdown.component';
import { MuliselectautocopleteComponent } from './components/muliselectautocoplete/muliselectautocoplete.component';
import { FormComponent } from './components/form/form.component';
import { DialogContentExampleDialogComponent } from './components/dialog-content-example-dialog/dialog-content-example-dialog.component';
import { VendorRegistrationComponent } from './components/vendor-registration/vendor-registration.component';
import { SsoLoginComponent } from './components/sso-login/sso-login.component';
// import { PayeeRegistrationComponent } from './components/payee-registration/payee-registration.component';
import { UserRequestComponent } from './components/user-request/user-request.component';
// import { PayeeDashboardComponent } from './components/payee-dashboard/payee-dashboard.component';
import { PayeeQuestionnaireComponent } from './components/payee-questionnaire/payee-questionnaire.component';

import {DatatableComponent} from  './components/datatable/datatable.component';

// Common Layouts
import { RegistrationLayoutComponent } from './layout/registration-layout/registration-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';


import { HeaderComponent } from 'src/app/layout/header/header.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { TogglesidemenuComponent } from 'src/app/layout/togglesidemenu/togglesidemenu.component';

RegistrationLayoutComponent

@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent,
    FooterLandingComponent,
    StyleguideComponent,
    SidemenuComponent,
    EmployeeServiceDetailsComponent,
    AttachfileComponent,
    SteperComponent,
    MuliselectautocopleteComponent,
    FormComponent,
    DialogContentExampleDialogComponent,
    VendorRegistrationComponent,
    SsoLoginComponent,
    // PayeeRegistrationComponent,
    UserRequestComponent,
    // PayeeDashboardComponent,
    PayeeQuestionnaireComponent,
    // SearchdropdownComponent,,
    RegistrationLayoutComponent,
    DashboardLayoutComponent,
    HeaderComponent,
    FooterComponent,
    TogglesidemenuComponent,
    DatatableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,

    MatComponentsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
