import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PerfilService } from '../../servicios/perfil.service';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})
export class ModificarperfilPage implements OnInit {
  notes = {id: null, title: null, description: null};
  constructor( public router: Router, public perfilService: PerfilService) {
    this.notes = this.perfilService.getNote('c');
   }

  ngOnInit() {
  }
  public regresarPerfi() {
    this.router.navigate(['/tabs/tab3']);
  }
}
