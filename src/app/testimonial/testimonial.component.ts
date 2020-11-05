import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  tList: any[] = [];

  constructor() {
    this.tList = [
        { id: 0, path: './assets/svg/avatar-male.svg',
        name: 'Alexander A',
        text: 'Buen acabado en la piezas para motos y demás piezas metálicas'},
        { id: 1, path: './assets/svg/avatar-f.svg',
        name: 'Gina C',
        text: 'Muy buen trabajo'},
        { id: 2, path: './assets/svg/avatar-male.svg',
        name: 'Jorge A',
        text: 'Excelente servicio'}
    ];
   }

  ngOnInit(): void {
  }

}
