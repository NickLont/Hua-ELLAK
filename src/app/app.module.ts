import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing} from './app.routing';

import { AppComponent }  from './app.component';
import { ApplicantComponent} from './applicant/applicant.component';
import { AdminComponent} from './admin/admin.component';
import { LoginComponent } from './login/login.component';

import {AuthenticationService} from './_services/authentication.service';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
  imports:      [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ApplicantComponent,
    AdminComponent,
    LoginComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuard
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
