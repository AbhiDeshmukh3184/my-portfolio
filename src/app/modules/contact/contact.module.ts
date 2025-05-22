import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { PrimeNgModule } from 'src/app/primengmodule/primemodule.module';

export const routes = [
  {
    path: '', component: ContactComponent,
  }
];

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    PrimeNgModule
  ]
})
export class ContactModule { }
