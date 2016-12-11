import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CreateProjectComponent } from './create-project/create-project.component';
import { LoginComponent } from './login/login.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TruncatePipe } from './truncate.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HomeComponent,
    AppRoutingComponent,
    CreateProjectComponent,
    LoginComponent,
    ProjectDetailComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
