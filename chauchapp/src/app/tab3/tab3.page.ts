import { Component, OnInit, ViewChild, ViewChildDecorator } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { PerfilService, perfiles } from '../servicios/perfil.service';
import { debug } from 'util';
import { NavController } from '@ionic/angular';

import {Router} from '@angular/router';
// tslint:disable-next-line: class-name


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public infoPerfil: any = [];
  notes = {id: null, title: null, description: null};
  constructor(public authService: AuthService, public perfilService: PerfilService, public router: Router) {
  }

    public irModificar(id) {
    this.router.navigate(['/modificarperfil', {id} ]);
  }
  LogOut() {
    this.authService.logout();
  }
ngOnInit() {
  // this.notes = this.perfilService.getNote(this.authService.userId);
 /*this.perfilService.getPerfil().subscribe(perfil => {
    perfil.map( perfiles => {
      const data: perfiles = perfiles.payload.doc.data() as perfiles;
      data.id = perfiles.payload.doc.id;
      console.log(data);
    });
   });*/

   this.perfilService.getProfile().subscribe(perfil => {
     // tslint:disable-next-line: no-shadowed-variable
       this.infoPerfil = perfil;
       
         });

  }
}
