import { Component, OnInit } from '@angular/core';
import {ServiciosI } from '../../models/infoServicio.interface';
import { InfoServicioService } from '../../services/info-servicio.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-servicio-detalle',
  templateUrl: './servicio-detalle.page.html',
  styleUrls: ['./servicio-detalle.page.scss'],
})
export class ServicioDetallePage implements OnInit {
  servicio: ServiciosI = {
    nombre: '',
    descripcion: '',
    disponibilidad: '',
    telefono: '',
    idusuario:''
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
  }
}
