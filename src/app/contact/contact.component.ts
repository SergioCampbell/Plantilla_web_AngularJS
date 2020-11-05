import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacto: any [] = [];

  constructor() {
    this.contacto = [
     {
      phone : ['+57 311 2519020', '(5) 3268416'],
      dir : 'Carrera 8 # 6- 153'
     }

    ];
   }

  ngOnInit(): void {
  }

}
