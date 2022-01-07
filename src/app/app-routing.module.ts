import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CallbackComponent} from "./callback/callback.component";
import {CallbackGuard} from "./callback.guard";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'callback', canActivate: [CallbackGuard] ,component: CallbackComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
