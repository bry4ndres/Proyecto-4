import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { PerfilService } from '../../servicios/perfil.service';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})
export class ModificarperfilPage implements OnInit {
  notes = {id: null, title: null, description: null};
  id = null;
  constructor( public router: Router, public perfilService: PerfilService, private activatedRoute: ActivatedRoute) {
   
   }

  ngOnInit() {
  }
  public regresarPerfi() {
    this.router.navigate(['/tabs/tab3']);
  }
}
