import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndianHolidaysComponent } from './indian-holidays/indian-holidays.component';
import { InternationalHolidaysComponent } from './international-holidays/international-holidays.component';
import { ShortBreaksComponent } from './short-breaks/short-breaks.component';
import { GoToComponent } from './go-to/go-to.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    IndianHolidaysComponent,
    InternationalHolidaysComponent,
    ShortBreaksComponent,
    GoToComponent,
    LoginComponent,
    HomeComponent,
    PnfComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      //{path: 'Home', component: HomeComponent},
      {path: 'IndianHolidays', component: IndianHolidaysComponent},
      {path:'InternationalHolidays', component:InternationalHolidaysComponent},
      {path:'ShortBreaks', component: ShortBreaksComponent},
      {path: 'GoTo', component: GoToComponent},
      {path: 'Signin',component:LoginComponent},
      {path:'Signup', component:SignupComponent},
      {path: '**', component: PnfComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
