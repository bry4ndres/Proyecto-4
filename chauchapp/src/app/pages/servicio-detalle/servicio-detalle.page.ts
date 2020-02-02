import { Component, OnInit } from '@angular/core';
import {ServiciosI } from '../../models/infoServicio.interface';
import { InfoServicioService } from '../../services/info-servicio.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { PerfilService, perfiles } from '../../servicios/perfil.service';
import { debug } from 'util';

@Component({
  selector: 'app-servicio-detalle',
  templateUrl: './servicio-detalle.page.html',
  styleUrls: ['./servicio-detalle.page.scss'],
})
export class ServicioDetallePage implements OnInit {
  today = Date.now();
  servicio: ServiciosI = {
    nombre: '',
    descripcion: '',
    disponibilidad: '',
    telefono: '',
    idusuario:'',
    Name:'',
    fecha:''

  };
  servicioId= null;
  constructor(private route: ActivatedRoute, private nav: NavController, private infoServicioService: InfoServicioService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.servicioId = this.route.snapshot.params['id'];
    if (this.servicioId){
      this.loadServicio();
    }
  }
  async loadServicio(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.infoServicioService.getServicio(this.servicioId).subscribe(servicio => {
      loading.dismiss();;
      this.servicio = servicio;
    });
    console.log(this.today);
  }
  you()
  {
    window.open('https://wa.me/593'+this.servicio.telefono, '_blank');
    //window.open('https://www.messenger.com/t/alvaro.lopez.969', '_blank');
  }

  
}
