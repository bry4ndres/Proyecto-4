import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Platform } from '@ionic/angular';
import {Router} from '@angular/router';

import { AuthService } from '../../servicios/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  /*providerFb: firebase.auth.FacebookAuthProvider;
  conectado = false;
  userId: string;
  constructor(
    public afDB: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private fb: Facebook,
    public platform: Platform,
    public router: Router
  ) {this.providerFb = new firebase.auth.FacebookAuthProvider();
     this.afAuth.authState.subscribe(auth => {
console.log(auth);
if (!auth) {
        console.log('No se conecto');
      } else {
        console.log('UserId' + auth.uid);
        this.conectado = true;
        this.userId = auth.uid;
      }
    });
  }

  facebookLogin() {
    if (this.platform.is('cordova')) {
      console.log('PLateforme cordova');
      this.facebookCordova();
    } else {
      console.log('PLateforme Web');
      this.facebookWeb();
    }
}

facebookCordova() {
  this.fb.login(['email']).then( (response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
      firebase.auth().signInWithCredential(facebookCredential)
      .then((success) => {
          console.log('Info Facebook: ' + JSON.stringify(success));
      }).catch((error) => {
          console.log('Erreur: ' + JSON.stringify(error));
      });
  }).catch((error) => { console.log(error); });
}

facebookWeb() {
  this.afAuth.auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((success) => {
      console.log('Info Facebook: ' + JSON.stringify(success));
      console.log('Nombres: ' + success.user.displayName);
      console.log('IdUsuario: ' + success.user.uid);
      console.log('NumeroTelefono: ' + success.user.phoneNumber);
      console.log('Email: ' + success.user.email);
      console.log('UrlFoto: ' + success.user.photoURL);
      this.afDB.object('Empleados/' + success.user.uid).set({
        Nombres: success.user.displayName,
        UrlFoto: success.user.photoURL,
        Email: success.user.email,
        NumeroTelefono: success.user.phoneNumber
      });
      this.router.navigate(['../tabs/tab1']);
    }).catch((error) => {
      console.log('Erreur: ' + JSON.stringify(error));
    });
}

logout() {
  this.afAuth.auth.signOut();
  this.conectado = false;
}*/


// Con servicios
constructor(private authService: AuthService, public router: Router) {}
IniciarSesionfacebook() {
  this.authService.facebookLogin();
  this.router.navigate(['../tabs/tab1']);
}
}
