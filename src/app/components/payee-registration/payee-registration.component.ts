import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSessions } from 'src/app/model/user';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatRadioChange } from '@angular/material/radio';
import { VendorSubmitDialogComponent } from 'src/app/shared/vendor-submit-dialog/vendor-submit-dialog.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms'
import { EncrDecrService } from 'src/app/services/encr-decr.service';
import { AppConfig } from 'src/app/app.config';
import { OtpWindowComponent } from '../../shared/otp-window/otp-window.component';
@Component({
  selector: 'app-payee-registration',
  templateUrl: './payee-registration.component.html',
  styleUrls: ['./payee-registration.component.css']
})
export class PayeeRegistrationComponent implements OnInit {

  nri:any="No";
  isNri:boolean=false;
  officeAdd:any;
  isofficeAdd:boolean=false;
  VendorType:any;
  InVenType:any;
  IndiDepartment:any;
  IndiOffice:any;
  IndiDivision:any;
  IndiDistrict:any;
  IndiSubDistrict:any;
  SubType:any;
  BankName:any;
  BankBranch:any;
  BankIFSC:any;
  AccountNo:any;
  PanNo:any;
  GSTNo:any
  GSTDate:any;
  payeeType:any='Vendor';
  memberArray:any []=[""];
  fileToUpload: File | null = null;
  CINno:any;
  selectedIndex:any=0;
  showAddBank:boolean=true;
  addArray:any []=[""];
  baiscDetailForm:any = FormGroup;
  bankForm:any = FormGroup;
  AuthenticatePersonForm:any = FormGroup;
  OfficeAddressForm:any = FormGroup;
  basicDetailSubmitted: boolean = false;
  bankFormSubmitted: boolean = false;
  AuthenticatePersonSubmitted: boolean = false;
  OfficeAddressSubmitted: boolean = false;
  model:any = [];
  incrementNumber: number = 1;
  currentUser : UserSessions = new UserSessions();
  config: AppConfig = new AppConfig();
  constructor(public dialog: MatDialog,private fb: FormBuilder,private EncrDecr: EncrDecrService, private router:Router ) {

        // Basic Details Validations
        this.baiscDetailForm = this.fb.group({
          firmName: ['', Validators.required],
          firstName: ['', [Validators.required]],
          lastName: ['', [Validators.required]],
          gender: ['', [Validators.required]],
          dob: ['', [Validators.required]],
          mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
          emailId: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
          state: ['', [Validators.required]],
          district: ['', [Validators.required]],
          block: ['', [Validators.required]],
          gramPanchayat: ['', [Validators.required]],
          village: ['', [Validators.required]],
          address: ['', [Validators.required]],
          pinCode: ['', [Validators.required]],
          vendorType: ['', [Validators.required]],
          panNo: ['', [Validators.required, Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]],
          gstNo: ['', [Validators.required]],
          aadharNo:[''],
          organizationType:'',
          janAadharNo:[''],
          cinNo:[''],
          organizationSubType:[''],
          gstDate:['']
        }
        );
    
        console.log(this.payeeType);
    
    
    // Bank Details Validations
        this.bankForm = this.fb.group({
          BankDetails: this.fb.array([this.fb.group({
            BankName: ['', Validators.required],
            BankBranch: ['', Validators.required],
            BankIFSC: ['', Validators.required],
            AccountNo: ['', Validators.required]
          })])
        });
    
    
        // Authenticate Person Validation
        this.AuthenticatePersonForm = this.fb.group({
          MemberDetails: this.fb.array([this.fb.group({
            FirstName: ['', Validators.required],
            LastName: [''],
            Gender: ['', Validators.required],
            MobileNo: ['',[ Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            EmailId: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            DOB: ['', Validators.required],
          })])
        });
    
    
        // Authenticate Person Validation
        this.OfficeAddressForm = this.fb.group({
          OfficeAddressDetails: this.fb.array([this.fb.group({
            state: ['', Validators.required],
            district: ['', Validators.required],
            block: ['', Validators.required],
            gramPanchayat: ['', Validators.required],
            village: ['', Validators.required],
            fullAddress: ['', Validators.required],
            pinCode: ['', Validators.required]
          })])
        });
   }

  ngOnInit() {
    if(localStorage.getItem('current_user')){
      const userinfo:any = localStorage.getItem('current_user');
      console.log(userinfo);
      var decryptuserinfo = this.config.decrypt(userinfo);
      this.currentUser = JSON.parse(decryptuserinfo);
    }

    console.log(this.currentUser);

    if(this.currentUser){
      console.log(this.currentUser.RoleId)
    }


    
    document.getElementById("sidebar")!.style.display = "block";
    console.log(this.payeeType, this.VendorType)

  }

  // Payee change
  onPayeeChange (data: MatRadioChange){
    this.payeeType = data.value;
    console.log(this.payeeType);

        // Basic Details Validations according to condition
        if(this.payeeType == 'Individual'){
          this.baiscDetailForm.get('janAadharNo').setValidators(Validators.required);
        }else{
          this.baiscDetailForm.get('janAadharNo').clearValidators();
        }
    
        if(this.payeeType == 'Individual' || this.VendorType=='Government' || this.VendorType=='Private'){
          this.baiscDetailForm.get('aadharNo').setValidators(Validators.required);
        }else{
          this.baiscDetailForm.get('aadharNo').clearValidators();
        }
        
        if(this.VendorType=='company' || this.payeeType=='Organization'){
          this.baiscDetailForm.get('cinNo').setValidators(Validators.required);
        }else{
          this.baiscDetailForm.get('cinNo').clearValidators();
        }
    
        if(this.payeeType=='Organization'){
          this.baiscDetailForm.get('organizationType').setValidators(Validators.required);
        }else{
          this.baiscDetailForm.get('organizationType').clearValidators();
        }
  }

  //Basic 
  get basicFormControl() {
    return this.baiscDetailForm.controls;
  }
  basicDetailSubmit() {
    console.log(this.baiscDetailForm);
    if (this.baiscDetailForm.valid) {
      this.basicDetailSubmitted = true;
      console.log(this.basicDetailSubmitted);
      this.nextStep();
      alert('Form basicDetailSubmitted succesfully!!!\n Check the values in browser console.');
      console.table(this.baiscDetailForm.value);
    }
  }


  //Bank
  bankDetailSubmit() {
    console.log(this.bankForm);
    if (this.bankForm.valid) {
      this.bankFormSubmitted = true;
      console.log(this.bankFormSubmitted);
      this.nextStep();
      alert('Form bankFormSubmitted succesfully!!!\n Check the values in browser console.');
      console.table(this.bankForm.value);
    }
  }
  get bankFormControl() {
    return this.bankForm.controls;
  }
  AddBank()
  {
      const controls = (this.bankForm.get('BankDetails')as FormArray);
      controls.push(this.fb.group({
        BankName: ['', Validators.required],
        BankBranch: ['', Validators.required],
        BankIFSC: ['', Validators.required],
        AccountNo: ['', Validators.required]
      }));
  }
  RemoveBank(i:number)
  {
    const controls = (this.bankForm.get('BankDetails')as FormArray);
    controls.removeAt(i);
    if(controls.length===0){
      this.AddBank();
    }
  }

  //  Authenticate person

  authenticatePersonDetailSubmit() {
    console.log(this.AuthenticatePersonForm);
    if (this.AuthenticatePersonForm.valid) {
      this.AuthenticatePersonSubmitted = true;
      console.log(this.AuthenticatePersonSubmitted);
      this.nextStep();
      alert('Form AuthenticatePersonSubmitted succesfully!!!\n Check the values in browser console.');
      console.table(this.AuthenticatePersonForm.value);
    }
  }
  get authenticatePersonFormControl() {
    return this.AuthenticatePersonForm.controls;
  }
  AddMember()
  {
      const controls = (this.AuthenticatePersonForm.get('MemberDetails')as FormArray);
      controls.push(this.fb.group({
        FirstName: ['', Validators.required],
        LastName: [''],
        Gender: ['', Validators.required],
        MobileNo: ['',[ Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        EmailId: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        DOB: ['', Validators.required],
      }));
  }
  RemoveMember(i:number)
  {
    const controls = (this.AuthenticatePersonForm.get('MemberDetails')as FormArray);
    controls.removeAt(i);
    if(controls.length===0){
      this.AddMember();
    }
  }

    //  Office Address

    officeAddressDetailSubmit() {
      console.log(this.OfficeAddressForm);
      if (this.OfficeAddressForm.valid) {
        this.OfficeAddressSubmitted = true;
        console.log(this.OfficeAddressSubmitted);
        this.nextStep();
        alert('Form OfficeAddressSubmitted succesfully!!!\n Check the values in browser console.');
        console.table(this.OfficeAddressForm.value);
      }
    }
    get officeAddressFormControl() {
      return this.OfficeAddressForm.controls;
    }
    AddAddress()
    {
        const controls = (this.OfficeAddressForm.get('OfficeAddressDetails')as FormArray);
        controls.push(this.fb.group({
          state: ['', Validators.required],
          district: ['', Validators.required],
          block: ['', Validators.required],
          gramPanchayat: ['', Validators.required],
          village: ['', Validators.required],
          fullAddress: ['', Validators.required],
          pinCode: ['', Validators.required]
        }));
    }
    RemoveAddress(i:number)
    {
      const controls = (this.OfficeAddressForm.get('OfficeAddressDetails')as FormArray);
      controls.removeAt(i);
      if(controls.length===0){
        this.AddAddress();
      }
    }

  

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
}

public nextStep() {
    this.selectedIndex += 1;
    console.log(this.selectedIndex);
    
}

public previousStep() {
    this.selectedIndex -= 1;
}
  nriChange()
  {
    console.warn(this.nri)
    if(this.nri=='Yes')
    this.isNri=true;
    else
    this.isNri=false;
  }
  officeAddressChange()
  {
    console.warn(this.nri)
    if(this.officeAdd=='Yes')
    this.isofficeAdd=true;
    else
    this.isofficeAdd=false;
  }

  handleFileInput(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileToUpload = file
      
    }
   
}

// uploadFileToActivity() {
//   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
//     // do something, if upload success
//     }, error => {
//       console.log(error);
//     });

// }
// postFile(fileToUpload: File): Observable<boolean> {
//   const endpoint = 'your-destination-url';
//   const formData: FormData = new FormData();
//   formData.append('fileKey', fileToUpload, fileToUpload.name);
//   return this.httpClient
//     .post(endpoint, formData, { headers: yourHeadersConfig })
//     .map(() => { return true; })
//     .catch((e) => this.handleError(e));
// }
  FinalSubmit(){
    let data =  {...this.baiscDetailForm.value, ...this.bankForm.value, ...this.AuthenticatePersonForm.value,...this.OfficeAddressForm.value};
    console.log(data);
    if(this.OfficeAddressForm.valid){
      this.dialog.open(VendorSubmitDialogComponent,{ panelClass: 'dialog-w-30'});
    }
  }
  openOtpModal() {
    // this.display = "block";
    const dialogRef = this.dialog.open(OtpWindowComponent,{ panelClass: 'dialog-w-30'});
    return dialogRef.afterClosed();
  }
}
