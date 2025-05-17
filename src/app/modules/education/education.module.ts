import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';

export const routes = [
  {
    path: '', component: EducationComponent,
  }
]

@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class EducationModule { }
