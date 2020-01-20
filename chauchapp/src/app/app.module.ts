import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';

import { Facebook } from '@ionic-native/facebook/ngx';

export const firebaseConfig = {
  apiKey: 'AIzaSyDYEUGeODQ1a3a2oSE3LO9pHT8Qgy0BeWw',
    authDomain: 'chauchapp-bd.firebaseapp.com',
    databaseURL: 'https://chauchapp-bd.firebaseio.com',
    projectId: 'chauchapp-bd',
    storageBucket: 'chauchapp-bd.appspot.com',
    messagingSenderId: '933214056303',
    appId: '1:933214056303:web:b51f594b4f8a5c6ad0829a',
    measurementId: 'G-FQT60VWJEH'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: FirestoreSettingsToken, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
