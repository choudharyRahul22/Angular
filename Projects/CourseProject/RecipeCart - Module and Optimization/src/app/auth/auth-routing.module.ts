import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {SignComponent} from "./sign/sign.component";

const authRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SignComponent },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule{}
