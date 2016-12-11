// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
//
// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class AppRoutingModule { }


import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectComponent } from '../project/project.component';
import { HomeComponent } from '../home/home.component';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { LoginComponent } from '../login/login.component';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'createproject', component: CreateProjectComponent },
      { path: 'project-detail/:pid', component: ProjectDetailComponent }

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
