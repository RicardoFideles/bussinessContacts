import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyAHit06lKNyXr6noe497CM96DFfyAK2W5g",
  authDomain: "bussinesscontacts-a0373.firebaseapp.com",
  databaseURL: "https://bussinesscontacts-a0373.firebaseio.com",
  storageBucket: "bussinesscontacts-a0373.appspot.com",
  messagingSenderId: "793776822050"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
