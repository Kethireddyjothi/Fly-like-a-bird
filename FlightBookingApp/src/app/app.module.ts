import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './material.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent  } from './signup/signup.component';
import { SearchComponent  } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe} from './filter.pipe';
import {FilterComponent} from './filter/filter.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    FilterComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    RouterModule.forRoot([
  { path: 'signup', component: SignupComponent },
     { path: 'login', component: LoginComponent },
     {path: 'search', component: SearchComponent },
     {path: 'filter', component: FilterComponent }
   ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }