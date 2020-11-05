import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: any[] = [];

  constructor() {


    this.services = [
      {
        id : 0, patch: './assets/icons/desk.svg',
        title : 'Mantenimiento a Gimnasios',
        description : 'I am a description'
      },
      {
        id : 1, patch: './assets/icons/flag.svg',
        title : 'Mantenimiento a Clinicas',
        description : 'I am a description'
      },
      {
        id : 2, patch: './assets/icons/presentation.svg',
        title : 'Cromado de piezas de motos',
        description : 'I am a description'
      },
      {
        id : 3, patch: './assets/icons/rotate-right.svg',
        title : 'Brillado de piezas de aluminio',
        description : 'I am a description'
      },
      {
        id : 4, patch: './assets/icons/synchronize.svg',
        title : 'Embellecimiento de piezas en general',
        description : 'I am a description'
      },
      {
        id : 5, patch: './assets/icons/trash.svg',
        title : 'Servicio de pintura horneada',
        description : 'I am a description'
      },
    ];
  }

  ngOnInit(): void {
  }

}
