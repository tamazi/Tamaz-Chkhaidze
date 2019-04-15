import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';


var config = {
    apiKey: "AIzaSyC2LqejzZchhX2yziDkOAnKRLe5Hpl7dhg",
    authDomain: "phonebook-311.firebaseapp.com",
    databaseURL: "https://phonebook-311.firebaseio.com",
    projectId: "phonebook-311",
    storageBucket: "phonebook-311.appspot.com",
    messagingSenderId: "415827989916"
  };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HeaderComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
