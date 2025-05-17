import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill/skill.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';

export const routes = [
  {
    path: '', component: SkillComponent,
  }
];

@NgModule({
  declarations: [
    SkillComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class SkillModule { }
