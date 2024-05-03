import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MembersetupComponent } from './membersetup/membersetup.component';
import { MemberTableComponent } from './member-table/member-table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'login',
    pathMatch : "full"
  },

  {
    path: "login",
    component : LoginComponent,
  },
  {
    path: "membertable",
    component: MemberTableComponent,
  },
  {
    path: "membersetup",
    component: MembersetupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
