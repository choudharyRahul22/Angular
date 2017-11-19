import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {TrackerComponent} from "./tracker/tracker.component";
import {TrackComponent} from "./track/track.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'tracker', component: TrackerComponent },
  { path: 'track', component: TrackComponent },
  { path: 'dashboard', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
