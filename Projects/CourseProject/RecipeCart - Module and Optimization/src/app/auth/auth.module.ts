import {NgModule} from "@angular/core";
import {SignComponent} from "./sign/sign.component";
import {SignupComponent} from "./signup/signup.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations: [
    SignComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
})
export class AuthModule {}
