import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';

export const routes = [
  {
    path: '', component: ProjectComponent,
  }
];

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class ProjectModule { }
