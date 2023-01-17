import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule } from '@angular/material/button';
import {MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatNativeDateModule} from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
const Mat = [
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatInputModule,
  MatTableModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDatepickerModule,
  MatStepperModule,
  MatSidenavModule,
  MatSortModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatMomentDateModule,
  MatTabsModule,
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Mat
  ],

  exports:[
    Mat
  ]
})
export class MatComponentsModule { }
