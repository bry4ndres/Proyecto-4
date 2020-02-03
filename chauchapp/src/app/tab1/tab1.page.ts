import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {ServiciosI } from '../models/infoServicio.interface';
import { InfoServicioService } from '../services/info-servicio.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  servicios: ServiciosI[];
  
  constructor(private infoServicios: InfoServicioService) {}

  ngOnInit() {
    this.infoServicios.getServicios().subscribe(res => {
      this.servicios = res;
    });
    
      }

}
      

