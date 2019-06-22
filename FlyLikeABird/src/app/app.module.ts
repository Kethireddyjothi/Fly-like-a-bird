import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent  } from './signup/signup.component';
import { SearchComponent  } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import {FilterComponent} from './filter/filter.component';
import { BookingComponent } from './booking/booking.component';
import { TravellerComponent } from './traveller/traveller.component';
import { ReviewComponent } from './review/review.component';
import { Ng5SliderModule } from 'ng5-slider';
//import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    FilterComponent,
    BookingComponent,
    TravellerComponent,
    ReviewComponent,
    //HeaderComponent,
    AboutComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    Ng5SliderModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {path: 'search', component: SearchComponent },
  {path: 'filter', component: FilterComponent },
  {path: 'booking', component: BookingComponent },
  {path: 'traveller', component: TravellerComponent },
  {path: 'review', component: ReviewComponent },
  {path: 'about', component: AboutComponent},
   ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
