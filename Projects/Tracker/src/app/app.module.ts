import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import { HeaderComponent } from './header/header.component';
import { TrackerComponent } from './tracker/tracker.component';
import {AuthService} from "./auth/auth.service";
import {TrackerService} from "./shared/tracker.service";
import {DataStorageService} from "./shared/data-storage.service";
import { TrackComponent } from './track/track.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGaurdService} from "./auth/auth-gaurd.service";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    TrackerComponent,
    TrackComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, TrackerService, DataStorageService, AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
