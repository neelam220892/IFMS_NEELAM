import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { VendorSubmitDialogComponent } from 'src/app/vendor-submit-dialog/vendor-submit-dialog.component';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Console } from 'console';

@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.css']
})
export class VendorRegistrationComponent implements OnInit {
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
  bankArray:any []=[""];
  memberArray:any []=[""];
  fileToUpload: File | null = null;
  CINno:any;
  selectedIndex:any=0;
  showAddBank:boolean=true;
  addArray:any []=[""];
  registerForm:any = FormGroup;
  basicDetailSubmitted: boolean = false;
  model:any = [];
  constructor(public dialog: MatDialog,private fb: FormBuilder) { }


  ngOnInit(): void {
    document.getElementById("sidebar")!.style.display = "block";

    console.log(this.payeeType, this.VendorType)

   

    this.registerForm = this.fb.group({
      firmName: ['', Validators.required],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      emailId: ['', [Validators.required]],
      state: ['', [Validators.required]],
      district: ['', [Validators.required]],
      block: ['', [Validators.required]],
      gramPanchayat: ['', [Validators.required]],
      village: ['', [Validators.required]],
      address: ['', [Validators.required]],
      pinCode: ['', [Validators.required]],
      vendorType: ['', [Validators.required]],
      panNo: ['', [Validators.required]],
      gstNo: ['', [Validators.required]],
      aadharNo:[''],
      organizationType:[''],
      janAadharNo:[''],
      cinNo:[''],
      organizationSubType:[''],
      gstDate:['']
    }
    );
    if(this.payeeType === 'Individual'){
      this.registerForm.get('aadharNo').setValidators(Validators.required);
      this.registerForm.get('janAadharNo').setValidators(Validators.required);
    }else if(this.VendorType=='company' || this.payeeType=='Organization'){
      this.registerForm.get('cinNo').setValidators(Validators.required);
    }
    else if(this.payeeType=='Organization' || this.VendorType=='Government' || this.VendorType=='Private'){
      this.registerForm.get('aadharNo').setValidators(Validators.required);
    }
    else if(this.payeeType === 'Organization'){
      this.registerForm.get('organizationType').setValidators(Validators.required);
    }
  }


  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      this.basicDetailSubmitted = true;
      console.log(this.basicDetailSubmitted);
      this.nextStep();
      alert('Form basicDetailSubmitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
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
  AddBank()
  {
    this.showAddBank=true;
    this.bankArray.push("");
  }
  RemoveBank(j:any)
  {
    this.bankArray.splice(j,1);
  }
  AddMember()
  {
    this.memberArray.push("");
  }
  RemoveMember(j:any)
  {
    this.memberArray.splice(j,1);
  }
  AddAddress()
  {
    this.addArray.push("");
  }
  RemoveAddress(j:any)
  {
    this.addArray.splice(j,1);
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
  Submit()
  {
    this.dialog.open(VendorSubmitDialogComponent,
      {
        panelClass: 'dialog-w-30'
      }
      );
  }

}
