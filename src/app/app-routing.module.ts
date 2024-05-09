import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MembersetupComponent } from './membersetup/membersetup.component';
import { MemberTableComponent } from './member-table/member-table.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { RegistrationComponent } from './registration/registration.component';

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
    path:"memberdetail",
    component: MemberDetailComponent
  },
  {
    path: "membersetup",
    component: MembersetupComponent
  },
  {
    path: "registration",
    component : RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
