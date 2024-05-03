import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MembersetupComponent } from './membersetup/membersetup.component';
import { MemberTableComponent } from './member-table/member-table.component';
import { SearchPipe } from './search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MemberDetailComponent } from './member-detail/member-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MembersetupComponent,
    MemberTableComponent,
    SearchPipe,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
