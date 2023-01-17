import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorSubmitDialogComponent } from './vendor-submit-dialog/vendor-submit-dialog.component';
import { OtpWindowComponent } from './otp-window/otp-window.component';
import { MatComponentsModule } from '../modules/mat-module.module';
import { NgOtpInputModule } from 'ng-otp-input';
@NgModule({
  declarations: [
        VendorSubmitDialogComponent,
        OtpWindowComponent
    ],
  imports: [
    CommonModule,
    MatComponentsModule,
    NgOtpInputModule
  ],
  exports:[]
})
export class SharedModule { }
