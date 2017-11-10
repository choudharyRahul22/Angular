import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanDeactivate, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {UsersComponent} from "../users/users.component";
import {UserComponent} from "../users/user/user.component";
import {ServersComponent} from "../servers/servers.component";
import {ServerComponent} from "../servers/server/server.component";
import {EditServerComponent} from "../servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {AuthGaurd} from "../auth-gaurd.service";
import {CanDeactivateGaurd} from "../servers/edit-server/can-deactivate-gaurd.service";
import {ErrorPageComponent} from "../error-page/error-page.component";
import {ServerResolverService} from "../servers/server/server-resolver.service";

const appRoutes: Routes = [
  {path: '' , component: HomeComponent},

  {path: 'users' , component: UsersComponent, children: [
    {path: ':id/:name' , component: UserComponent}
  ]},

  {path: 'servers' ,
    /*canActivate: [AuthGaurd]*/
    canActivateChild: [AuthGaurd],
    component: ServersComponent, children:[
    {path: ':id' , component: ServerComponent, resolve: {server: ServerResolverService}},
    {path: ':id/edit' , component: EditServerComponent, canDeactivate: [CanDeactivateGaurd]}
  ]},

  //{path: 'not-found' , component: PageNotFoundComponent},
  {path: 'not-found' , component: ErrorPageComponent, data: {message: 'Page Not Found' }},
  {path: '**' , redirectTo: '/not-found'}


]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,{useHash: true})
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
