// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

import { Component } from '@angular/core';

/**
 * Main home component wired for routing.
 */
@Component({
  template: `
    <h1>Home Router</h1>
    <nav>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a routerLink="/project" routerLinkActive="active">Project</a>
      <a routerLink="/createproject" routerLinkActive="active">Create Project</a>
      <a routerLink="/projectdetail" routerLinkActive="active">Project Details</a>
    </nav>
  `
})
export class HomeComponent { }
