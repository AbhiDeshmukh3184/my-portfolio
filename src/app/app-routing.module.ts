import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    {
        path: 'portfolio',
        component: FeaturesComponent,
        canActivateChild: [AuthGuard],
        children: [
            {path:"profile",loadChildren:() => import('./modules/profile/profile.module').then(m => m.ProfileModule),canActivate:[AuthGuard]},     
            {path:"education",loadChildren:() => import('./modules/education/education.module').then(m => m.EducationModule)},     
            {path:"skill",loadChildren:() => import('./modules/skill/skill.module').then(m => m.SkillModule)},     
            {path:"experience",loadChildren:() => import('./modules/project/project.module').then(m => m.ProjectModule)},     
           
        ]
    },
    
   
    { path: '**', pathMatch: 'full', redirectTo: 'welcome' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
