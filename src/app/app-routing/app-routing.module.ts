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

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'project', component: ProjectComponent },

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
