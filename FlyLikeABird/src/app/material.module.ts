import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,MatCheckboxModule, MatCardModule, MatDialogModule,MatDividerModule, MatInputModule, MatTableModule,MatSelectModule,MatRadioModule,
  MatToolbarModule, MatMenuModule,MatTabsModule,MatIconModule,MatSortModule, MatProgressSpinnerModule,MatDatepickerModule,MatNativeDateModule
} from '@angular/material';
@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatSortModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTabsModule,
  MatRadioModule,
  MatCheckboxModule,
  MatDividerModule,

  
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatSortModule,
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatSelectModule,
   MatTabsModule,
   MatRadioModule,
   MatCheckboxModule,
   MatDividerModule
   ],
})
export class CustomMaterialModule { }