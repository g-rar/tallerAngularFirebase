import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/";
import { AngularFirestoreModule } from "@angular/fire/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA3X_Gog5Kj_S55aNhA8TLzULpgjfFnvbs",
  authDomain: "tallerfirebaseangulargera.firebaseapp.com",
  databaseURL: "https://tallerfirebaseangulargera.firebaseio.com",
  projectId: "tallerfirebaseangulargera",
  storageBucket: "tallerfirebaseangulargera.appspot.com",
  messagingSenderId: "593571037008",
  appId: "1:593571037008:web:f2ac9c1f3a84fc3d243655",
  measurementId: "G-7DXF5F3BFW"
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
